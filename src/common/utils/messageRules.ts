import { mainFormData } from '@/components/zod/mainForm'
import { frequencyOptionsEnum } from '../enums/frequencyOptionsEnum'
import { durationOptionsEnum } from '../enums/durationOptionsEnum'
import { messagesEnum } from '../enums/messagesEnum'
import { messages } from './messages'

export const messageRules = [
  {
    check: (formValues: mainFormData) =>
      isTrial(formValues.trialFrequency) &&
      isNeverEnd(formValues.duration) &&
      formValues.initialPrice,
    message: '123123',
  },
  {
    check: (formValues: mainFormData) =>
      isTrial(formValues.trialFrequency) && isNeverEnd(formValues.duration),
    message: messages[messagesEnum.TRIAL_WITH_NEVER_ENDING],
  },
  {
    check: (formValues: mainFormData) =>
      isTrial(formValues.trialFrequency) && !isNeverEnd(formValues.duration),
    message: messages[messagesEnum.TRIAL_WITH_ENDING],
  },
]

const isTrial = (trialFrequency: frequencyOptionsEnum) => {
  if (trialFrequency !== frequencyOptionsEnum.NONE) return true

  return false
}

const isNeverEnd = (duration: durationOptionsEnum) => {
  if (duration === durationOptionsEnum.NEVER_ENDS) return true

  return false
}
