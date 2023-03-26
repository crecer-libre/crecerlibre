import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CrecerLibre } from './CrecerLibre'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CrecerLibre />
    </React.StrictMode>
  </BrowserRouter>
)
