"use client";
import React from 'react'
import NavBar from '../../components/NavBar'
import SideBar from '@/components/SideBar'
import { CircleLoader, HashLoader, RiseLoader } from 'react-spinners';

const HomePage = () => {
    return (
        <div className='max-h-screen overflow-auto'>
            <div className='he'>
                <NavBar />
            </div>
            <div className='flex flex-row'>
                <SideBar />
                <div className='ml-60 mr-10 flex flex-col justify-between items-center p-60' >

                    {/* <HashLoader
                        color="#FFA726"
                        cssOverride={{}}
                        loading
                    /> */}

                </div>
            </div>
        </div>
    )
}

export default HomePage