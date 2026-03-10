import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BrandGuide from './pages/BrandGuide'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrandGuide />
  </StrictMode>,
)
