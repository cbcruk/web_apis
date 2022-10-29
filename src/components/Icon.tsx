import clsx from 'clsx'

type Props = JSX.IntrinsicElements['span']

export function Icon({ className, children }: Props) {
  return (
    <span
      className={clsx(['material-symbols-outlined', 'text-sm', className])}
      style={{
        fontVariationSettings: 'FILL 1',
      }}
    >
      {children}
    </span>
  )
}
