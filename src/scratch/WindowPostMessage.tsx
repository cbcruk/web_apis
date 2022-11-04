import { CardItem } from '../components'

const data = {
  icon: 'send',
  title: 'Window.postMessage()',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage',
  message: ``,
}

function WindowPostMessage() {
  return <CardItem color="amber" {...data} />
}

export default WindowPostMessage
