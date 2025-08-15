import React from 'react'
import Navber from './Navber'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const RootLayout = () => {
  return (
    <div>
        <Navber/>
        <Sidebar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default RootLayout