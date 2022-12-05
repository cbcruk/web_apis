import clsx from 'clsx'
import { useMemo } from 'react'
import { classed } from '@tw-classed/react'
import { Colors } from '../constants/colors'
import { Icon, StyledIcon } from './Icon'

export type Props = {
  color?: Colors
  link: string
  icon: string
} & JSX.IntrinsicElements['div']

function random(max: number, min: number) {
  return Math.random() * (max - min) + min
}

export function Card({ icon, link, color, title, className, children }: Props) {
  const bg = useMemo(() => `bg-${color}-600`, [])
  const backgroundColor = useMemo(() => `hsl(${random(360, 0)}deg 53% 62%)`, [])

  return (
    <div
      className={clsx(['flex-1 p-4 rounded-xl text-sm', bg, className])}
      style={{
        backgroundColor,
        backgroundBlendMode: 'screen',
      }}
    >
      <StyledCardIcon>{icon}</StyledCardIcon>
      <CardTitle href={link}>{title}</CardTitle>
      <CardBody>{children}</CardBody>
    </div>
  )
}

export function CardTitle({ href, children }: JSX.IntrinsicElements['a']) {
  return (
    <StyledCardTitle href={href} target="_blank">
      {children}
    </StyledCardTitle>
  )
}

export function CardBody({ children }: JSX.IntrinsicElements['div']) {
  return <StyledCardBody>{children}</StyledCardBody>
}

const StyledCardTitle = classed.a(
  'block underline text-black font-medium whitespace-nowrap',
)

const StyledCardBody = classed.div('flex gap-2 mt-4')

const StyledCardIcon = classed(StyledIcon, 'text-black text-lg')
