import { Card, DialogTrigger } from '../components'

function PageVisibilityAPI() {
  return (
    <Card
      icon="visibility"
      title="Page Visibility API"
      link="https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API"
      color="violet"
    >
      <DialogTrigger
        message={`- [How to Detect Idle Browser Tabs with the Page Visibility API](https://alligator.io/js/page-visibility-api/)`}
      />
    </Card>
  )
}

export default PageVisibilityAPI
