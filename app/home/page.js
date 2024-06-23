import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import PopUp from '@/components/PopUp'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <SideBar />
            </div>
            <PopUp />

        </div>
    )
}

export default HomePage