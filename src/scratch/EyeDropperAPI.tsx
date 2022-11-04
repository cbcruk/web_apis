import { CardItem } from '../components'

const data = {
  icon: 'colorize',
  title: 'EyeDropper API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
  message: `- [The EyeDropper API: Pick colors from anywhere on your screen | Polypane, The browser for ambitious developers](https://polypane.app/blog/the-eye-dropper-api-pick-colors-from-anywhere-on-your-screen/)`,
}

function EyeDropperAPI() {
  return <CardItem color="teal" {...data} />
}

export default EyeDropperAPI
