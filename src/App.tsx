import { createElement, lazy, Suspense } from 'react'

const modules = import.meta.glob('./scratch/*.tsx')
const components = Object.entries(modules).map(([, value]) =>
  lazy(value as any)
)

function App() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        <Suspense fallback={null}>
          {components.map((component, index) => {
            return createElement(component, { key: index })
          })}
        </Suspense>
      </div>
    </div>
  )
}

export default App
