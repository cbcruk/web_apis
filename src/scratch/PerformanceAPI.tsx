import { Card, DialogTrigger } from '../components'

function PerformanceAPI() {
  return (
    <>
      <Card
        icon="analytics"
        title="Performance API"
        link="https://developer.mozilla.org/en-US/docs/Web/API/Performance"
        color="purple"
      >
        <DialogTrigger
          message={`- [How to Get Started With the JavaScript Performance API | DigitalOcean](https://alligator.io/js/js-performance-api/)`}
        />
      </Card>
    </>
  )
}

export default PerformanceAPI
