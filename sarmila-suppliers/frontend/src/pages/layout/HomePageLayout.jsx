import React from 'react'
import { FooterComponent, HeaderComponent } from '../../components/home/HeaderComponent'
import { Outlet } from 'react-router-dom'

const HomePageLayout = () => {
  return (
    <>
    <HeaderComponent />
        <Outlet />
    <FooterComponent />    
    </>    
  )
}

export default HomePageLayout