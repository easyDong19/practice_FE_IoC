import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

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
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
})
