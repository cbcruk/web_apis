import { Button, Card } from '../components'
import { openDialog } from '../components/Resources'

function PerformanceAPI() {
  return (
    <>
      <Card
        icon="analytics"
        title="Performance API"
        link="https://developer.mozilla.org/en-US/docs/Web/API/Performance"
        color="purple"
      >
        <Button
          icon="list_alt"
          onClick={() => {
            openDialog(`- [How to Get Started With the JavaScript Performance API |
              DigitalOcean](https://alligator.io/js/js-performance-api/)`)
          }}
        />
      </Card>
    </>
  )
}

export default PerformanceAPI
