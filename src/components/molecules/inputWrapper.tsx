import React, { forwardRef, ReactNode } from 'react'

interface InputWrapperProps {
  label: string
  disabled?: boolean
  children: ReactNode
}

const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ label, children, disabled }, ref) => {
    return (
      <div
        ref={ref}
        className={disabled ? 'hidden md:flex md:invisible' : ''}
      >
        <p
          className={`font-medium mb-3 text-sm ${
            disabled ? 'text-gray-300' : 'text-black'
          }`}
        >
          {label}
        </p>
        <div className="flex gap-2">{children}</div>
      </div>
    )
  }
)

InputWrapper.displayName = 'InputWrapper'

export { InputWrapper }
