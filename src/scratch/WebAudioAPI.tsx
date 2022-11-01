import { Button, Card } from '../components'
import { openDialog } from '../components/Resources'

function WebAudioAPI() {
  return (
    <Card
      icon="volume_up"
      title="Web Audio API"
      link="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
      color="yellow"
    >
      <Button
        icon="list_alt"
        onClick={() => {
          openDialog(`- [Web Audio API Tutorial](https://web-audio-api.firebaseapp.com/)
- [Making an Audio Waveform Visualizer with Vanilla JavaScript | CSS-Tricks](https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/)
- [Introduction to Web Audio API | CSS-Tricks](https://css-tricks.com/introduction-web-audio-api/)
- [Sound](https://ptsjs.org/guide/sound-0800)
- [Sounds fun - JakeArchibald.com](https://jakearchibald.com/2016/sounds-fun/)`)
        }}
      />
    </Card>
  )
}

export default WebAudioAPI
