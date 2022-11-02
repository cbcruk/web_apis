import { useDialog } from '../atoms/dialog'
import { Button, Card } from '../components'

function FileSystemAccessAPI() {
  const { openDialog } = useDialog()

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
            openDialog(
              `- [The File System Access API: simplifying access to local files](https://web.dev/native-file-system/)`
            )
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
    </>
  )
}

export default FileSystemAccessAPI
