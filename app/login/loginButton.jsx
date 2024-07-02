"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const LoginBtn = () => {
    const router = useRouter('');
    const handleLogin = async () => {
        router.push('../home');
        router.refresh();
    }
    return (
        <>
            <button onClick={handleLogin}
                className='w-full border rounded-lg hover:bg-transparent hover:text-white hover:border-orange-400 py-2 px-3 bg-orange-400 text-gray-800'>
                Login
            </button>
        </>
    )
}


export default LoginBtn;