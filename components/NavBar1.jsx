"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaBackward } from 'react-icons/fa';
import { HiLogout } from 'react-icons/hi';

const NavBar1 = () => {


    const router = useRouter();


    const handleBack = () => {
        router.back();
    }


    return (
        <div className="flex justify-between p-6">
            <div>
                <button className='rounded-lg px-4 py-2 text-2xl hover:bg-orange-200 hover:text-gray-800'
                    onClick={handleBack}>
                    <FaBackward />
                </button>
            </div>

            <h1 className='text-2xl font-bold p-6 glow-text '>
                CARTHAIR</h1>
            <div>
                <button className='rounded-lg px-4 py-2 text-2xl hover:bg-orange-200 hover:text-gray-800'>
                    <HiLogout />
                </button>
            </div>
        </div>
    )
}
export default NavBar1