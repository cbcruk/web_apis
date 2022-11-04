import { CardItem } from '../components'

const data = {
  icon: 'share',
  title: 'Web Share Target API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
  message: `- [Share images to your website using the Web Share Target API](https://justmarkup.com/articles/2020-02-11-share-images-to-your-website/)`,
}

function WebShareTargetAPI() {
  return <CardItem color="teal" {...data} />
}

export default WebShareTargetAPI
