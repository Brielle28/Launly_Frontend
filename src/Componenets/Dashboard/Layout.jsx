import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarDashboard from "../Dashboard/NavbarDashboard"
import Aside from "./Aside"
const Layout = () => {
  return (
    <>
    <div>
    <NavbarDashboard/>
    <div className='flex justify-start'>
    <Aside/>
    <div className=' w-[100%] pb-[350px] pl-[250px] pt-[110px] bg-blue-50'>
    <Outlet/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Layout
