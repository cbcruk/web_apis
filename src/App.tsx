import { useAtom } from 'jotai'
import { createElement, lazy, Suspense } from 'react'
import { dialogAtom } from './atoms/dialog'
import { Resources } from './components/Resources'

const modules = import.meta.glob('./scratch/*.tsx')
const components = Object.entries(modules).map(([, value]) =>
  lazy(value as any)
)

function App() {
  const [dialog, setDialog] = useAtom(dialogAtom)

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        <Suspense fallback={null}>
          {components.map((component, index) => {
            return createElement(component, {
              key: index,
              openDialog(value: string) {
                setDialog(p => ({ ...p, message: value }))
              }
            })
          })}
        </Suspense>
      </div>
      <Resources />
    </div>
  )
}

export default App
