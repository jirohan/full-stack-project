import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import "./assets/css/global.css"

import Routing from './Routing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing />
    {/* <HomePage /> */}
  </React.StrictMode>,
)
