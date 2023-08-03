import React from 'react'
import { Navbar, Footer } from './components'
import {Outlet, Navigate, Route, Routes, useLocation} from 'react-router-dom'

const Layout = () => {
  const user = true;
  const location = useLocation()

  return user ? (
   <Outlet/>
   ) : (
    <Navigate to='user-auth' state={{from: location }} replace/>
  );
}

const App = () => {
  return (
    <main>
      <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route 
            path='/' 
            element={<Navigate to='/find-jobs' replace={true} />} 
            />
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/compaines' element={<Companies />} />
          </Route>
        </Routes>
      <Footer />
    </main>
  )
}

export default App