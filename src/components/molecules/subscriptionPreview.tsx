import { durationOptionsEnum } from '@/common/enums/durationOptionsEnum'
import { frequencyOptionsEnum } from '@/common/enums/frequencyOptionsEnum'
import { formatCurrency } from '@/common/utils/formatCurrency'

interface IValues {
  initialPrice: number
  billingPeriod: number
  billingFrequency: frequencyOptionsEnum
  billingCycles: number
  periodPayment: number
  trialPeriod: number
  trialFrequency: frequencyOptionsEnum
}

interface SubscriptionPreviewerProps {
  text: string
  values: Partial<IValues>
}

export const SubscriptionPreview = ({
  text,
  values,
}: SubscriptionPreviewerProps) => {
  const {
    billingCycles,
    billingPeriod,
    billingFrequency,
    initialPrice,
    periodPayment,
    trialPeriod,
    trialFrequency,
  } = values

  const permutedText = text
    .replace('$<inital price>', formatCurrency(initialPrice || 0))
    .replace('$<payment amount>', formatCurrency(periodPayment || 0))
    .replace('<billing period>', `${billingPeriod} ${billingFrequency}`)
    .replace('<time interval>', `${trialPeriod} ${trialFrequency}`)
    .replace('<# of billing cycles>', `${billingCycles}`)
    .replace(
      '$<total amount paid>',
      `${
        initialPrice && billingPeriod && periodPayment
          ? formatCurrency(initialPrice + billingPeriod * periodPayment)
          : formatCurrency(0)
      }`
    )

  return (
    <div className="border-2 border-l-0 w-full flex items-center justify-center rounded-md min-h-fit relative px-10 py-8 mb-10">
      <span className="h-full absolute left-0 top-0 bg-fuchsia-800 rounded-l-sm w-3" />
      <p>{permutedText}</p>
    </div>
  )
}
