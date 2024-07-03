"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import { AiOutlineLogout } from 'react-icons/ai'

function NavBar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  }
  return (
    <div  className='flex flex-col border justify-between' >
        <div className='border'>
          <h1>CARTHAIR</h1>
          <ul>
            <li> About us </li>
            <li> Contact us </li>
            <li> Settings </li>
          </ul>
          <div>profile</div>
    </div>
    </div>
    
  )
}

export default NavBar