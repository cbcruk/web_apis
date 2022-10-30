import { Button, Card, Dialog, useDialog } from '../components'

function BroadcastChannelAPI() {
  const { modalRef } = useDialog()

  return (
    <>
      <Card
        icon="broadcast_on_home"
        title="Broadcast Channel API"
        link="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API"
        color="sky"
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
          - [How to use the BroadcastChannel API in JavaScript | DigitalOcean](https://alligator.io/js/broadcastchannel-api/)
        </p>
      </Dialog>
    </>
  )
}

export default BroadcastChannelAPI
