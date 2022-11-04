import { useDialog } from '../atoms/dialog'
import { Button, Props as ButtonProps } from './Button'

export type Props = {
  message: string
} & Pick<ButtonProps, 'icon'>

export function DialogTrigger({ icon = 'list_alt', message }: Props) {
  const { openDialog } = useDialog()

  return (
    <Button
      icon={icon}
      onClick={() => {
        openDialog(message)
      }}
    />
  )
}
