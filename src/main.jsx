import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './assets/Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
)
