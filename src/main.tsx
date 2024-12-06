import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }

  const { worker } = await import('./mocks/browser.ts')

  worker.start()
}

const rootElement = document.getElementById('root')!

enableMocking().then(() => {
  const root = createRoot(rootElement)
  root.render(<App />)
})
