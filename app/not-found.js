import React from 'react'
import { Fa500Px, FaPage4, FaServer } from 'react-icons/fa'
import { HiBadgeCheck, HiCode, HiRefresh, HiUserRemove } from 'react-icons/hi'
import { PiNumberCircleZeroFill } from "react-icons/pi";

const notfound = () => {
  return (
    <div className='flex flex-row lg:flex-col h-screen justify-center items-center'>
      <div className='flex text-4xl lg:text-8xl items-center'>
        <FaPage4 />
        <PiNumberCircleZeroFill />
        <FaPage4 />
      </div>
      <h1 className='text-xs flex flex-row lg:flex-col  p-2'>
        Page does not Exist</h1>
    </div>
  )
}

export default notfound

