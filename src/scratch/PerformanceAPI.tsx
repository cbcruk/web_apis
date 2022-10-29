import { Button, Card, Dialog, useDialog } from '../components'

function PerformanceAPI() {
  const { modalRef } = useDialog()

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
            modalRef.current && modalRef.current.show()
          }}
        />
      </Card>
      <Dialog ref={modalRef}>
        <p className="border-t border-gray-400 pt-2 mt-2 font-mono text-[10px]">
          - [How to Get Started With the JavaScript Performance API |
          DigitalOcean](https://alligator.io/js/js-performance-api/)
        </p>
      </Dialog>
    </>
  )
}

export default PerformanceAPI
