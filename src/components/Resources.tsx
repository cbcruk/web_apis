import { useEffect } from 'react'
import { message } from '../signals/dialog'
import { Dialog } from './Dialog'

export function Resources() {
  useEffect(() => {
    return () => {
      message.value = ''
    }
  }, [])

  if (!message.value) {
    return null
  }

  return (
    <Dialog onClose={() => (message.value = '')}>
      <p className="border-t border-gray-400 pt-2 mt-2 font-mono text-[10px]">
        {message.value}
      </p>
    </Dialog>
  )
}

export function openDialog(value: string) {
  message.value = value
}
