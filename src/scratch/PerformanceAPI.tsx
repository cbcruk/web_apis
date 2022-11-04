import { CardItem } from '../components'

const data = {
  icon: 'analytics',
  title: 'Performance API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance',
  message: `- [How to Get Started With the JavaScript Performance API | DigitalOcean](https://alligator.io/js/js-performance-api/)`,
}

function PerformanceAPI() {
  return <CardItem color="purple" {...data} />
}

export default PerformanceAPI
