import { CardItem } from '../components'

const data = {
  icon: 'badge',
  title: 'Badging API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Badging_API',
  message: `- [Badging for app icons](https://web.dev/badging-api/)`,
}

function BadgingAPI() {
  return <CardItem color="lime" {...data} />
}

export default BadgingAPI
