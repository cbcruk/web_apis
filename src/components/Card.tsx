import clsx from 'clsx'
import { Colors } from '../constants/colors'
import { Icon } from './Icon'

export type Props = {
  color?: Colors
  link: string
  icon: string
} & JSX.IntrinsicElements['div']

function random(max: number, min: number) {
  return Math.random() * (max - min) + min
}

export function Card({ icon, link, color, title, className, children }: Props) {
  const bg = `bg-${color}-600`

  return (
    <div
      className={clsx(['flex-1 p-4 rounded-xl text-sm', bg, className])}
      style={{
        backgroundColor: `hsl(${random(360, 0)}deg 53% 62%)`,
        backgroundBlendMode: 'screen',
      }}
    >
      <Icon className="text-black text-lg">{icon}</Icon>
      <CardTitle href={link}>{title}</CardTitle>
      <CardBody>{children}</CardBody>
    </div>
  )
}

export function CardTitle({ href, children }: JSX.IntrinsicElements['a']) {
  return (
    <a
      href={href}
      target="_blank"
      className="block underline text-black font-medium whitespace-nowrap"
    >
      {children}
    </a>
  )
}

export function CardBody({ children }: JSX.IntrinsicElements['div']) {
  return <div className="flex gap-2 mt-4">{children}</div>
}
