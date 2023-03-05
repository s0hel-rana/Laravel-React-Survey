import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import { ContextsProvider } from './context/ContextsProvider'
import './index.css'
import router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextsProvider>
    <RouterProvider router={router} />
    </ContextsProvider>
  </React.StrictMode>,
)
