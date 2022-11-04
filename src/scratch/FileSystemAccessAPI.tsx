import { Button, Card, DialogTrigger } from '../components'

function FileSystemAccessAPI() {
  return (
    <Card
      icon="folder_open"
      title="File System Access API"
      link="https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API"
      color="emerald"
    >
      <DialogTrigger
        message={`- [The File System Access API: simplifying access to local files](https://web.dev/native-file-system/)`}
      />
      <Button
        icon="terminal"
        onClick={async () => {
          // @ts-ignore
          await window.showOpenFilePicker()
        }}
      />
    </Card>
  )
}

export default FileSystemAccessAPI
