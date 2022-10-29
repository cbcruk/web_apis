import clsx from 'clsx'
import { Colors } from '../constants/colors'
import { Icon } from './Icon'

type Props = {
  color?: Colors
  link: string
  icon: string
} & JSX.IntrinsicElements['div']

export function Card({ icon, link, color, title, className, children }: Props) {
  const bg = `bg-${color}-600`

  return (
    <div className={clsx(['p-4 rounded-xl text-sm', bg, className])}>
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
      className="block underline text-black font-medium"
    >
      {children}
    </a>
  )
}

export function CardBody({ children }: JSX.IntrinsicElements['div']) {
  return <div className="flex gap-2 mt-4">{children}</div>
}
