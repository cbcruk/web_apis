import { Button, Card } from '../components'
import { openDialog } from '../components/Resources'

function BroadcastChannelAPI() {
  return (
    <Card
      icon="broadcast_on_home"
      title="Broadcast Channel API"
      link="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API"
      color="sky"
    >
      <Button
        icon="list_alt"
        onClick={() => {
          openDialog(
            `- [How to use the BroadcastChannel API in JavaScript | DigitalOcean](https://alligator.io/js/broadcastchannel-api/)`
          )
        }}
      />
    </Card>
  )
}

export default BroadcastChannelAPI
