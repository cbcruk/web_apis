import clsx from 'clsx'
import { forwardRef } from 'react'
import { classed } from '@tw-classed/react'
import { Icon } from './Icon'

export type Props = {
  icon?: string
} & JSX.IntrinsicElements['button']

type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, Props>(
  ({ icon, children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
        {icon && <Icon className="text-black">{icon}</Icon>}
      </StyledButton>
    )
  },
)

export const StyledButton = classed.button(
  'inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300/60',
)
