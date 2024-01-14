import { frequencyOptionsEnum } from '../enums/frequencyOptionsEnum'
import { SelectOption } from '../interfaces/selectOption'

export const frequencyOptions: SelectOption[] = [
  {
    label: frequencyOptionsEnum.DAYS,
    value: frequencyOptionsEnum.DAYS,
  },
  {
    label: frequencyOptionsEnum.WEEKS,
    value: frequencyOptionsEnum.WEEKS,
  },
  {
    label: frequencyOptionsEnum.MONTHS,
    value: frequencyOptionsEnum.MONTHS,
  },
]

export const Options: SelectOption[] = [
  {
    label: frequencyOptionsEnum.NONE,
    value: frequencyOptionsEnum.NONE,
  },
  {
    label: frequencyOptionsEnum.DAYS,
    value: frequencyOptionsEnum.DAYS,
  },
  {
    label: frequencyOptionsEnum.WEEKS,
    value: frequencyOptionsEnum.WEEKS,
  },
  {
    label: frequencyOptionsEnum.MONTHS,
    value: frequencyOptionsEnum.MONTHS,
  },
]
