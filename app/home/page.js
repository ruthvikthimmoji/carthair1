import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '@/components/SideBar'

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