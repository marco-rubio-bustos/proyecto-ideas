import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CustomDate from './componente/date/CustomDate.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CustomDate />
  </StrictMode>,
)
