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
    <div className='p-4 md:p-6 relative shadow-[0_0_5px_0] backdrop-blur-10 bg-orange-200/10 border-b-2  border-orange-200'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className='text-2xl font-mono font-bold glow-text ml-4 mb-4 md:mb-0'>CARTHAIR</h1>
        <div>
          <ul className='flex flex-col md:flex-row md:gap-24 justify-center items-center'>
            <li className='hover:text-orange-400 mb-4 md:mb-0'>
              <Link href='#'>
                Home
              </Link>
            </li>
            <li className='hover:text-orange-400 mb-4 md:mb-0'>
              <Link href='/pages/aboutUs'>
                About Us
              </Link>
            </li>
            <li className='hover:text-orange-400 mb-4 md:mb-0'>
              <Link href='/pages/contactus'>
                Contact Us
              </Link>
            </li>
            <li className='hover:text-orange-400'>
              <button onClick={handleLogout}>
                <FiLogOut size={28} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarHome