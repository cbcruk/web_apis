import { ForwardedRef, forwardRef, useId, useRef, useState } from 'react'
import { Icon } from './Icon'

type Ref = HTMLDialogElement

type Props = JSX.IntrinsicElements['dialog']

export function useDialog() {
  const id = useId()
  const ref = useRef<Ref>(null)

  return {
    id,
    modalRef: ref,
  }
}

export const Dialog = forwardRef<Ref, Props>(({ id, children }, ref) => {
  return (
    <dialog
      ref={ref}
      id={id}
      className="overflow-hidden p-0 rounded-xl mt-5 bg-zinc-700 shadow-lg text-gray-300"
    >
      <form method="dialog" className="w-96 max-w-[90vw] text-xs">
        <div className="p-4">
          <Icon className="text-lg">text_snippet</Icon>
          {children}
        </div>
        <div className="flex justify-end gap-2 p-4 py-3 bg-zinc-800">
          <button
            value="cancel"
            className="p-1 px-3 rounded bg-zinc-600 font-bold"
          >
            확인
          </button>
        </div>
      </form>
    </dialog>
  )
})
