import { CardItem } from '../components'

const data = {
  icon: 'stream',
  title: 'Streams API',
  link: 'https://developer.mozilla.org/ko/docs/Web/API/Streams_API',
  message: `- [Streams—The definitive guide](https://web.dev/streams/)
- [Web Streams Everywhere (and Fetch for Node.js) | CSS-Tricks](https://css-tricks.com/web-streams-everywhere-and-fetch-for-node-js/)
- [2016 - the year of web streams - JakeArchibald.com](https://jakearchibald.com/2016/streams-ftw/)
- [2016년은 웹 스트림(web stream)의 해다. | TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20160222)`,
}

function StreamsAPI() {
  return <CardItem color="rose" {...data} />
}

export default StreamsAPI
