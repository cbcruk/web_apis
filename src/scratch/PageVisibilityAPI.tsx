import { Button, Card } from '../components'
import { openDialog } from '../components/Resources'

function PageVisibilityAPI() {
  return (
    <Card
      icon="visibility"
      title="Page Visibility API"
      link="https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API"
      color="violet"
    >
      <Button
        icon="list_alt"
        onClick={() => {
          openDialog(
            `- [How to Detect Idle Browser Tabs with the Page Visibility API](https://alligator.io/js/page-visibility-api/)`
          )
        }}
      />
    </Card>
  )
}

export default PageVisibilityAPI
