import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NamedComponentTest from './components/NamedComponentTest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NamedComponentTest />
  </StrictMode>,
)
