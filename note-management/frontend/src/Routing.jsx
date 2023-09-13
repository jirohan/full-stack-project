import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/home/auth/LoginPage'
import ErrorPage from './pages/common/ErrorPage'
import AdminLayout from './pages/layout/AdminLayout'
import AdminDashboard from './pages/admin/dashboard/AdminDashboard'
import {AccessControlComponent} from "./components/access-control/AccessControlComponent"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import RegisterPage from './pages/home/auth/RegisterPage'
import HomePageLayout from './pages/layout/HomePageLayout'


const Routing = () => {
  return (
    <>
        <ToastContainer />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePageLayout/>} >
                  <Route path='/' element={<HomePage/>} />
                  <Route path="/login" element={<LoginPage/>} />
                  <Route path="/register" element={<RegisterPage/>} />
                </Route>
                
                <Route path="/admin" element={<AccessControlComponent Component={<AdminLayout />} />}>
                  <Route index element={<AdminDashboard/>} />
                  <Route path="user">
                    <Route index element={<>List all user</>} /> 
                    <Route path="create" element={<>Create Component</>} />
                    <Route path=":id" element={<>Detail of User</>} />
                    <Route path=":id/edit" element={<>Edit User form</>} /> 
                  </Route>          
                </Route>

                <Route path='*' element={<ErrorPage error={404} />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing