import clsx from 'clsx'
import { forwardRef } from 'react'
import { Icon } from './Icon'

export type Props = {
  icon?: string
} & JSX.IntrinsicElements['button']

type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, Props>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx([
          'inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300/60',
          className,
        ])}
        {...props}
      >
        {children}
        {icon && <Icon className="text-black">{icon}</Icon>}
      </button>
    )
  }
)
