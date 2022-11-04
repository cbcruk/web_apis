import { atom, useAtom } from "jotai";

export const dialogAtom = atom({
  open: false,
  message: '',
})

export function useDialog() {
  const [, setDialog] = useAtom(dialogAtom)

  return {
    openDialog(value: string) {
      setDialog(p => ({
        ...p,
        message: value
      }))
    }
  }
}