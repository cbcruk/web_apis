import { CardItem } from '../components'

const data = {
  icon: 'play_circle',
  title: 'Media Session API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API',
  message: `- [Give Users Control: The Media Session API | CSS-Tricks](https://css-tricks.com/give-users-control-the-media-session-api/)`,
}

function MediaSessionAPI() {
  return <CardItem color="cyan" {...data} />
}

export default MediaSessionAPI
