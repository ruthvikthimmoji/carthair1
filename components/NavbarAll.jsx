"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { FiLogOut } from "react-icons/fi";
import { TiArrowBackOutline } from "react-icons/ti";
import Link from 'next/link';


function NavbarAll() {
  const router = useRouter();

  const handleBack = () =>{
    router.back('./')
  }

  const handleLogout = () => {
    router.push("/");
  }
  return (
    <div className='p-4 lg:p-6 shadow-[0_0_5px_0] backdrop-blur-10 bg-orange-200/10 border-b-2 border-orange-200'>
      <ul className='flex flex-row justify-between items-center'>
        <li className='hover:text-orange-400'>
          <button onClick={handleBack}>
            <TiArrowBackOutline size={28} />
          </button>
        </li>
        <h1 className='text-xl lg:text-3xl glow-text'>CARTHAIR</h1>
        <li className='hover:text-orange-400'>
          <button onClick={handleLogout}>
            <FiLogOut size={28} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavbarAll