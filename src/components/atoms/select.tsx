import {
  Select as ShadCnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps<T extends SelectOption> {
  options: T[]
  name: string
  value: string
  placeholder?: string
  onValueChange: (value: string) => void
}

export const Select = ({
  name,
  value,
  options,
  placeholder,
  onValueChange,
}: SelectProps<SelectOption>) => {
  return (
    <ShadCnSelect
      onValueChange={(value) => onValueChange(value)}
      defaultValue={value}
    >
      <SelectTrigger
        data-cy={name}
        className="min-w-[230px]"
      >
        <SelectValue placeholder={placeholder || 'Select an Option'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              data-cy={`${name}_${option.value}`}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadCnSelect>
  )
}
