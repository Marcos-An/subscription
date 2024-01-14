import { ReactNode, forwardRef } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftElement?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftElement, ...props }, ref) => {
    return (
      <div className="relative flex items-center border border-input rounded-md w-full min-w-[5.4rem]">
        {leftElement && (
          <span className="absolute left-3 text-sm text-muted-foreground pointer-events-none">
            {leftElement}
          </span>
        )}

        <input
          type={type}
          className={`flex-1 h-10  w-full rounded-md ${
            leftElement ? 'pl-10' : 'pl-2'
          } pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
