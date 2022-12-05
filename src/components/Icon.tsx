import clsx from 'clsx'
import { classed } from '@tw-classed/react'

type Props = JSX.IntrinsicElements['span']

const defaultIconStyles = {
  fontVariationSettings: 'FILL 1',
}

export function Icon({ children }: Props) {
  return (
    <StyledIcon
      style={{
        ...defaultIconStyles,
      }}
    >
      {children}
    </StyledIcon>
  )
}

export const StyledIcon = classed.span('material-symbols-outlined text-sm')
