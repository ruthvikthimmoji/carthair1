"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';

const NavBar1 = () => {


    const router = useRouter();


    const handleBack = () => {
        router.back();
    }


    return (
        <div className='flex flex-row justify-between p-6 lg:p-8'>
            <div>
                <button className='rounded-lg px-4 py-2 text-3xl hover:bg-orange-200 hover:text-gray-800'
                    onClick={handleBack}>
                    <IoReturnUpBack />
                </button>
            </div>

            <h1 className='text-3xl font-bold p-6 glow-text '>
                CARTHAIR</h1>
            <div>
                <button className='rounded-lg px-4 py-2 text-3xl hover:bg-orange-200 hover:text-gray-800'>
                    <AiOutlineLogout/>
                </button>
            </div>
        </div>
    )
}
export default NavBar1