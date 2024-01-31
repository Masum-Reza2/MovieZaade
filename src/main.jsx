import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import ControlRoom from './ControlRoom/ControlRoom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlRoom>
      <RouterProvider router={Routes} />
    </ControlRoom>
  </React.StrictMode>,
)
