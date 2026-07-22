import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Switch between sessions by changing the import below
//import App from './AppSession1.jsx'
import App from './AppSession2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)