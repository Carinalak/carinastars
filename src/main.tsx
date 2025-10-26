import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { registerSW } from 'virtual:pwa-register'


// Lägg till meta-taggen med versionen dynamiskt
const meta = document.createElement('meta')
meta.name = 'version'
meta.content = import.meta.env.VITE_APP_VERSION
document.head.appendChild(meta)


let hasReloaded = false
// AUTO RELOAD när SW uppdateras
registerSW({
  immediate: true,
  onNeedRefresh() {
    if (!hasReloaded) {
      hasReloaded = true
      window.location.reload()
    }
  }
})



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
