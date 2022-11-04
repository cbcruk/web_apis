import { CardItem } from '../components'

const data = {
  icon: 'record_voice_over',
  title: 'Web Speech API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API',
  message: `- [Using the Web Speech API for Multilingual Translations | CSS-Tricks](https://css-tricks.com/using-the-web-speech-api-for-multilingual-translations/)
- [Exploring the Web Speech API](https://www.voorhoede.nl/en/blog/exploring-the-web-speech-api/)`,
}

function WebSpeechAPI() {
  return <CardItem color="green" {...data} />
}

export default WebSpeechAPI
