import { durationOptionsEnum } from '@/common/enums/durationOptionsEnum'
import { frequencyOptionsEnum } from '@/common/enums/frequencyOptionsEnum'
import { z } from 'zod'

export const subscriptionDataFormSchema = z.object({
  initialPrice: z.number().optional(),
  billingPeriod: z.number(),
  billingFrequency: z.enum([
    frequencyOptionsEnum.DAYS,
    frequencyOptionsEnum.WEEKS,
    frequencyOptionsEnum.MONTHS,
  ]),
  billingCycles: z.number(),
  periodPayment: z.number(),
  trialPeriod: z.number().optional(),
  trialFrequency: z.enum([
    frequencyOptionsEnum.NONE,
    frequencyOptionsEnum.DAYS,
    frequencyOptionsEnum.WEEKS,
    frequencyOptionsEnum.MONTHS,
  ]),
  duration: z.enum([
    durationOptionsEnum.CUSTOMIZE,
    durationOptionsEnum.NEVER_ENDS,
  ]),
})

export type mainFormData = z.infer<typeof subscriptionDataFormSchema>
