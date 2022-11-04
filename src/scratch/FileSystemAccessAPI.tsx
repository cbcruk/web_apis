import { Button, CardItem } from '../components'

const data = {
  icon: 'folder_open',
  title: 'File System Access API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
  message: `- [The File System Access API: simplifying access to local files](https://web.dev/native-file-system/)`,
}

function FileSystemAccessAPI() {
  return (
    <CardItem color="emerald" {...data}>
      <Button
        icon="terminal"
        onClick={async () => {
          // @ts-ignore
          await window.showOpenFilePicker()
        }}
      />
    </CardItem>
  )
}

export default FileSystemAccessAPI
