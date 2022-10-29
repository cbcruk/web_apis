import { Button, Card, Dialog, useDialog } from '../components'

function FileSystemAccessAPI() {
  const { modalRef } = useDialog()

  return (
    <>
      <Card
        icon="folder_open"
        title="File System Access API"
        link="https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API"
        color="emerald"
      >
        <Button
          icon="list_alt"
          onClick={() => {
            modalRef.current && modalRef.current.show()
          }}
        />
        <Button
          icon="terminal"
          onClick={async () => {
            // @ts-ignore
            await window.showOpenFilePicker()
          }}
        />
      </Card>
      <Dialog ref={modalRef}>
        <p className="border-t border-gray-400 pt-2 mt-2 font-mono text-[10px]">
          - [The File System Access API: simplifying access to local
          files](https://web.dev/native-file-system/)
        </p>
      </Dialog>
    </>
  )
}

export default FileSystemAccessAPI
