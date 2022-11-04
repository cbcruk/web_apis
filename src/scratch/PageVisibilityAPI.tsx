import { CardItem } from '../components'

const data = {
  icon: 'visibility',
  title: 'Page Visibility API',
  link: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API',
  message: `- [How to Detect Idle Browser Tabs with the Page Visibility API](https://alligator.io/js/page-visibility-api/)`,
}

function PageVisibilityAPI() {
  return <CardItem color="violet" {...data} />
}

export default PageVisibilityAPI
