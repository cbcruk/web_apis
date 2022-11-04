import { Card, Props as CardProps } from './Card'
import { DialogTrigger, Props as DialogTriggerProps } from './DialogTrigger'

type Props = DialogTriggerProps & CardProps

export function CardItem({ message, children, ...props }: Props) {
  return (
    <Card {...props}>
      {message && <DialogTrigger {...{ message }} />}
      {children}
    </Card>
  )
}
