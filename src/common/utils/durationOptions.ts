import { durationOptionsEnum } from '../enums/durationOptionsEnum'
import { SelectOption } from '../interfaces/selectOption'

export const durationOptions: SelectOption[] = [
  {
    label: durationOptionsEnum.CUSTOMIZE,
    value: durationOptionsEnum.CUSTOMIZE,
  },
  {
    label: durationOptionsEnum.NEVER_ENDS,
    value: durationOptionsEnum.NEVER_ENDS,
  },
]
