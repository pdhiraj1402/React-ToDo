import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {ToggleSwitch} from './projects/ToggleSwitch/ToggleSwitch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ToggleSwitch /> */}

  </StrictMode>,
)
