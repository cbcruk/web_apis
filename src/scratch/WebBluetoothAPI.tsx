import { CardItem } from '../components'

const data = {
  icon: 'bluetooth',
  title: 'Web Bluetooth API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
  message: `- [Bluetooth Anywhere](https://www.voorhoede.nl/en/blog/bluetooth-anywhere/)`,
}

function WebBluetoothAPI() {
  return <CardItem color="blue" {...data} />
}

export default WebBluetoothAPI
