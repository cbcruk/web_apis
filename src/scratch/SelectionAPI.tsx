import { CardItem } from '../components'

const data = {
  icon: 'content_copy',
  title: 'Selection API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API',
  message: `- [How to Create Actions for Selected Text With the Selection API | CSS-Tricks](https://css-tricks.com/how-to-create-actions-for-selected-text-with-the-selection-api/)`,
}

function SelectionAPI() {
  return <CardItem color="pink" {...data} />
}

export default SelectionAPI
