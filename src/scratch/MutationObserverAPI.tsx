import { CardItem } from '../components'

const data = {
  icon: 'earbuds',
  title: 'MutationObserver API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
  message: `- [Getting To Know The MutationObserver API — Smashing Magazine](https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/)`,
}

function MutationObserverAPI() {
  return <CardItem color="indigo" {...data} />
}

export default MutationObserverAPI
