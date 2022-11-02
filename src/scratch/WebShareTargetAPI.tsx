import { useDialog } from '../atoms/dialog'
import { Button, Card } from '../components'

function WebShareTargetAPI() {
  const { openDialog } = useDialog()

  return (
    <Card
      icon="share"
      title="Web Share Target API"
      link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API"
      color="teal"
    >
      <Button
        icon="list_alt"
        onClick={() => {
          openDialog(
            `- [Share images to your website using the Web Share Target API](https://justmarkup.com/articles/2020-02-11-share-images-to-your-website/)`
          )
        }}
      />
    </Card>
  )
}

export default WebShareTargetAPI
