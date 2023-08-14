import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/home/auth/LoginPage'
import ErrorPage from './pages/common/ErrorPage'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />

                <Route path='*' element={<ErrorPage error={404} />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing