'use client'
import { durationOptionsEnum } from '@/common/enums/durationOptionsEnum'
import { messagesEnum } from '@/common/enums/messagesEnum'
import { frequencyOptionsEnum } from '@/common/enums/frequencyOptionsEnum'
import { messages } from '@/common/utils/messages'
import { SubscriptionPreview } from '@/components/molecules/subscriptionPreview'
import { MainForm } from '@/components/organisms/mainForm'
import {
  mainFormData,
  subscriptionDataFormSchema,
} from '@/components/zod/mainForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export default function Home() {
  const formMethods = useForm<mainFormData>({
    defaultValues: {
      billingPeriod: 0,
      initialPrice: 0,
      billingCycles: 0,
      periodPayment: 0,
      trialPeriod: 0,
      duration: durationOptionsEnum.NEVER_ENDS,
      billingFrequency: frequencyOptionsEnum.MONTHS,
      trialFrequency: frequencyOptionsEnum.NONE,
    },
    resolver: zodResolver(subscriptionDataFormSchema),
  })

  const { watch } = formMethods

  const initialPrice = watch('initialPrice')
  const periodPayment = watch('periodPayment')
  const billingFrequency = watch('billingFrequency')
  const billingPeriod = watch('billingPeriod')
  const trialPeriod = watch('trialPeriod')
  const trialFrequency = watch('trialFrequency')
  const billingCycles = watch('billingCycles')
  const duration = watch('duration')

  const getMessage = useCallback(() => {
    if (
      trialFrequency !== frequencyOptionsEnum.NONE &&
      duration === durationOptionsEnum.NEVER_ENDS
    ) {
      return messages[messagesEnum.TRIAL_WITH_NEVER_ENDING]
    }

    if (
      trialFrequency !== frequencyOptionsEnum.NONE &&
      duration === durationOptionsEnum.CUSTOMIZE
    ) {
      return messages[messagesEnum.TRIAL_WITH_ENDING]
    }

    return messages[messagesEnum.NO_TRIAL_WITH_NEVER_ENDING]
  }, [trialFrequency, duration])

  return (
    <main className="max-w-[800px] h-screen m-auto gap-10 flex flex-col justify-center items-center px-6">
      <h1 className="font-semibold mb-[2vh]  mt-[4vh] md:mt-[0vh] md:mb-[6vh] text-xl">
        Set up your subscription
      </h1>

      <FormProvider {...formMethods}>
        <MainForm />
      </FormProvider>

      <SubscriptionPreview
        text={getMessage()}
        values={{
          initialPrice,
          billingFrequency,
          billingPeriod,
          periodPayment,
          trialPeriod,
          trialFrequency,
          billingCycles,
        }}
      />
    </main>
  )
}
