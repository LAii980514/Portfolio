import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics beforeSend={(event) => {
      if (typeof window !== 'undefined' && localStorage.getItem('ignore_analytics') === 'true') {
        return null;
      }
      return event;
    }} />
  </StrictMode>,
)
