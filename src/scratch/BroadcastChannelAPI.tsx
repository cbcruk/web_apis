import { CardItem } from '../components'

const data = {
  icon: 'broadcast_on_home',
  title: 'Broadcast Channel API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
  message: `- [How to use the BroadcastChannel API in JavaScript | DigitalOcean](https://alligator.io/js/broadcastchannel-api/)`,
}

function BroadcastChannelAPI() {
  return <CardItem color="sky" {...data} />
}

export default BroadcastChannelAPI
