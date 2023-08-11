import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import "./assets/css/global.css"

import HomePage from './pages/home/HomePage'
import LoginPage from './pages/home/auth/LoginPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    {/* <LoginPage /> */}
  </React.StrictMode>,
)
