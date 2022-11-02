import { useAtom } from 'jotai'
import { dialogAtom } from '../atoms/dialog'
import { Dialog } from './Dialog'

export function Resources() {
  const [dialog, setDialog] = useAtom(dialogAtom)

  if (!dialog.message) {
    return null
  }

  return (
    <Dialog onClose={() => setDialog(prev => ({ ...prev, message: '' }))}>
      <p className="border-t border-gray-400 pt-2 mt-2 font-mono text-[10px] whitespace-pre-line">
        {dialog.message}
      </p>
    </Dialog>
  )
}
