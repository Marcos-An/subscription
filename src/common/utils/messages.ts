import { messagesEnum } from '../enums/messagesEnum'

export const messages = {
  [messagesEnum.NO_TRIAL_WITH_NEVER_ENDING]: `Your customer will be charged $<inital price> immediately and then
   $<payment amount> every <billing period> until they cancel.`,
  [messagesEnum.TRIAL_WITH_NEVER_ENDING]: `Your customer will be charged $<inital price> immediately for their <time interval> trial, and then $<payment amount> every <billing period> until they cancel.`,
  [messagesEnum.TRIAL_WITH_ENDING]: `Your customer will be charged $<inital price> immediately for their <time interval> trial, and then $<payment amount> every <billing period>, <# of billing cycles> times. The total amount paid will be $<total amount paid>.`,
}
