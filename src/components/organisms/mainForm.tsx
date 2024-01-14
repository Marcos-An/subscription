'use client'
import { durationOptionsEnum } from '@/common/enums/durationOptionsEnum'
import {
  formatCurrency,
  parseJustPositive,
} from '@/common/utils/formatCurrency'
import { frequencyOptions, Options } from '@/common/utils/frequencyOptions'
import { Select } from '@/components/atoms/select'
import { InputWrapper } from '@/components/molecules/inputWrapper'
import { Input } from '@/ui/input'
import { Controller, useFormContext } from 'react-hook-form'
import { mainFormData } from '../zod/mainForm'
import { periodPaymentLabels } from '@/common/utils/periodPaymentLabels'
import { durationOptions } from '@/common/utils/durationOptions'
import { frequencyOptionsEnum } from '@/common/enums/frequencyOptionsEnum'
import { useEffect } from 'react'

export const MainForm = () => {
  const { watch, setValue, control } = useFormContext<mainFormData>()

  const trialFrequency = watch('trialFrequency')
  const billingFrequency = watch('billingFrequency')
  const duration = watch('duration')

  const handleIntegerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      event.target.value = `0`
    }
    event.target.value = parseJustPositive(event.target.value).toString()
  }

  useEffect(() => {
    if (trialFrequency === frequencyOptionsEnum.NONE) {
      setValue('trialPeriod', 0)
    }
  }, [trialFrequency, setValue])

  useEffect(() => {
    if (duration === durationOptionsEnum.NEVER_ENDS) {
      setValue('billingCycles', 0)
    }
  }, [setValue, duration])

  return (
    <form className="w-full">
      <div className="flex  gap-6 w-full flex-col md:flex-row mb-10">
        <InputWrapper label="Initial Price">
          <Controller
            name="initialPrice"
            control={control}
            render={({ field: { value, name } }) => (
              <Input
                type="text"
                name={name}
                leftElement="$"
                value={formatCurrency(value || 0).replace('$', '')}
                onChange={({ target }) => {
                  const value = parseJustPositive(target.value)
                  setValue('initialPrice', value)
                  setValue('periodPayment', value)
                }}
              />
            )}
          />
        </InputWrapper>
        <InputWrapper label="Billing Frequency">
          <Controller
            name="billingPeriod"
            control={control}
            render={({ field }) => (
              <Input
                min={0}
                {...field}
                type="number"
                className="w-[5rem]"
                onInput={handleIntegerInput}
              />
            )}
          />
          <Controller
            name="billingFrequency"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Select
                name={name}
                value={value}
                options={frequencyOptions}
                onValueChange={onChange}
                placeholder="Select a Billing Frequency"
              />
            )}
          />
        </InputWrapper>
        <InputWrapper label={periodPaymentLabels[billingFrequency]}>
          <Controller
            name="periodPayment"
            control={control}
            render={({ field: { value, name } }) => (
              <Input
                name={name}
                type="text"
                leftElement="$"
                value={formatCurrency(value || 0).replace('$', '')}
                onChange={({ target }) => {
                  const value = parseJustPositive(target.value)
                  setValue('periodPayment', value)
                }}
              />
            )}
          />
        </InputWrapper>
      </div>
      <div className="flex gap-6 w-full flex-col md:flex-row">
        <InputWrapper label="Trial period">
          <Controller
            name="trialPeriod"
            control={control}
            render={({ field }) => (
              <Input
                min={0}
                {...field}
                type="number"
                className="bg-red"
                disabled={frequencyOptionsEnum.NONE === trialFrequency}
                onInput={handleIntegerInput}
              />
            )}
          />

          <Controller
            name="trialFrequency"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Select
                name={name}
                value={value}
                onValueChange={onChange}
                options={Options}
                placeholder="Select a Trial period"
              />
            )}
          />
        </InputWrapper>
        <InputWrapper label="Duration">
          <Controller
            name="duration"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Select
                name={name}
                value={value}
                onValueChange={onChange}
                options={durationOptions}
                placeholder="Select a Duration"
              />
            )}
          />
        </InputWrapper>
        <InputWrapper
          label="Billing Cycle"
          disabled={duration === durationOptionsEnum.NEVER_ENDS}
        >
          <Controller
            name="billingCycles"
            control={control}
            render={({ field }) => (
              <Input
                min={0}
                {...field}
                type="number"
                onInput={handleIntegerInput}
              />
            )}
          />
        </InputWrapper>
      </div>
    </form>
  )
}
