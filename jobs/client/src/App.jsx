import React from 'react'
import { Navbar, Footer } from './components'
import {Outlet, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import { About, AuthPage, Companies, CompanyProfile, FindJobs, JobDetail, UploadJob, UserProfile } from './pages';

const Layout = () => {
  const user = false;
  const location = useLocation();

  return user ? (
   <Outlet/>
   ) : (
    <Navigate to='user-auth' state={{from: location }} replace/>
  );
}

const App = () => {
  const user = {};
  return (
    <main className='bg-slate-100'>
      <Navbar />

        <Routes>
          <Route element={<Layout />}>
            <Route 
            path='/' 
            element={<Navigate to='/find-jobs' replace={true} />} 
            />
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/compaines' element={<Companies />} />
            <Route 
              path={
                user?.user?.accountType === "seeker"
                ? "/user-profile" 
                : "/user-profile/:id"
              }
              element={<UserProfile />} 
            />

            <Route path='/company-profile' element={<CompanyProfile />} />
            <Route path='/company-profile/:id' element={<CompanyProfile />} />
            <Route path='/upload-job' element={<UploadJob />} />
            <Route path='/job-detail/:id' element={<JobDetail />} />
          </Route>

          <Route path='/about-us' element={<About />} />
          <Route path='/user-auth' element={<AuthPage />} />
        </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App