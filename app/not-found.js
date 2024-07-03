import React from 'react'
import Image from 'next/image'

const notfound = () => {
  return (
    <div className="h-screen lg:h-fixed  lg:w-full bg-auto bg-center bg-no-repeat bg-white">
      <div className='flex flex-col justify-center items-center h-scren backdrop-blur-10 bg-white'>
        <Image
          src='/404.gif' alt='404' width={'1080'} height={'1920'}
        />
      </div>
    </div>
  )
}

export default notfound

