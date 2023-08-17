import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/home/auth/LoginPage'
import ErrorPage from './pages/common/ErrorPage'
import CategoryDetail from './pages/home/category/CategoryDetail'
import AdminLayout from './pages/layout/AdminLayout'
import CustomerLayout from './pages/layout/CustomerLayout'
import AdminDashboard from './pages/admin/dashboard/AdminDashboard'
import { AccessControlComponent } from './components/access-control/AccessControlComponent'
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
                <Route path='/' element={<HomePageLayout />}>
                  <Route path='/' element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  <Route path="/category/:id" element={<CategoryDetail/>} />
                  <Route path="/search" element={<>SearchPage</>} />
                </Route>

                <Route path="/admin" element={<AccessControlComponent Component={<AdminLayout />} />}>
                  <Route index element={<AdminDashboard/>} />
                  <Route path="user" element={<>User Outlet<Outlet/></>}>
                    <Route index element={<>List all user</>} /> 
                    <Route path="create" element={<>Create Component</>} />
                    <Route path=":id" element={<>Detail of User</>} />
                    <Route path=":id/edit" element={<>Edit User form</>} />
                  </Route>    
                </Route> 

                <Route path="/customer" element={<CustomerLayout />}>
                  <Route index element={<>Customer Dashboard</>} />
                  <Route path="order">
                    <Route index element={<>Customer Order</>} />
                    <Route path="history" element={<>Customer History</>} />
                  </Route>
                </Route>

                <Route path="*" element={<ErrorPage error={404} />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing