"use client";
import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '@/components/SideBar'
import AddCustomers from '../addCustomers/page'

const HomePage = () => {
    return (
       <div>
        <div>
            <NavBar/>
        </div>
        <aside>
            <SideBar/>
        </aside>
       </div>
    )
}

export default HomePage