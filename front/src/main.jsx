import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CrecerLibre } from './CrecerLibre'
import './index.css';
import { CrecerLibreProvider } from './context/CrecerLibreProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CrecerLibreProvider>
    <BrowserRouter>
      <React.StrictMode>
        <CrecerLibre />
      </React.StrictMode>
    </BrowserRouter>
  </CrecerLibreProvider>
)
