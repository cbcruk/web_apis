import { Button, Card } from '../components'
import { openDialog } from '../components/Resources'

function FileSystemAccessAPI() {
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
