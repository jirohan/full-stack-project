import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/home/auth/LoginPage'
import ErrorPage from './pages/common/ErrorPage'
import CategoryDetail from './pages/home/category/CategoryDetail'
import AdminLayout from './pages/layout/AdminLayout'
import CustomerLayout from './pages/layout/CustomerLayout'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />

                <Route path="/category/:id" element={<CategoryDetail/>} />
                
                {/* 
                  /api/v1/user/   post => create
                  /api/v1/user/   get => list all
                  /api/v1/user/:id   get => detail fetch
                  /api/vi/user/:id   put => update
                  /api/vi/user/:id   delete => delete user

                */}
               <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<>Admin Dashboad</>} />
                  <Route path="user">
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

                
                

                <Route path='*' element={<ErrorPage error={404} />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing