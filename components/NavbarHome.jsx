"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { FiLogOut } from "react-icons/fi";
import Link from 'next/link';


function NavbarHome() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  }
  return (
    <div className='p-6 relative shadow-[0_0_5px_0] backdrop-blur-10 bg-orange-200/10  border-b-2 border-orange-200 '>
      <div className='flex flex-row justify-between m-2'>
        <h1 className='text-2xl font-mono font-bold glow-text ml-4'>CARTHAIR</h1>
        <div  >
          <ul className='flex flex-row justify-around gap-24 '>
            <Link href='#'>
              <li className='hover:text-orange-400'>
                Home
              </li>
            </Link>
            <Link href='/pages/aboutUs'>
              <li className='hover:text-orange-400'>
                About us
              </li>
            </Link>
            <Link href='/pages/contactus'>
              <li className='hover:text-orange-400'>
                Contact us
              </li>
            </Link>
            <li className='hover:text-orange-400'>
              <button onClick={handleLogout}>
                <FiLogOut size={'28'} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default NavbarHome