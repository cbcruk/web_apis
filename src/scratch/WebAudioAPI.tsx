import { CardItem } from '../components'

const data = {
  icon: 'volume_up',
  title: 'Web Audio API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
  message: `- [Web Audio API Tutorial](https://web-audio-api.firebaseapp.com/)
- [Making an Audio Waveform Visualizer with Vanilla JavaScript | CSS-Tricks](https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/)
- [Introduction to Web Audio API | CSS-Tricks](https://css-tricks.com/introduction-web-audio-api/)
- [Sound](https://ptsjs.org/guide/sound-0800)
- [Sounds fun - JakeArchibald.com](https://jakearchibald.com/2016/sounds-fun/)`,
}

function WebAudioAPI() {
  return <CardItem color="yellow" {...data} />
}

export default WebAudioAPI
