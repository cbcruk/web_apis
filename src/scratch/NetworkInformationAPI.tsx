import { CardItem } from '../components'

const data = {
  icon: 'network_check',
  title: 'Network Information API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
  message: `- [Adaptive Serving using JavaScript and the Network Information API - DEV Community](https://dev.to/addyosmani/adaptive-serving-using-javascript-and-the-network-information-api-331p)`,
}

function NetworkInformationAPI() {
  return <CardItem color="fuchsia" {...data} />
}

export default NetworkInformationAPI
