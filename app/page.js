import Link from 'next/link'
import React from 'react'


function LandinPage() {
  return (
    <div className="h-fixed lg:h-fixed lg:w-full bg-auto bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('/img6.jpg')"}}>
        <nav className='p-8'>
            <ul className='flex flex-row justify-around '>
            <Link href='/'>
            <li className='ml-4 hover:border-b-2 border-orange-200'>Home</li>
            </Link> 
            <Link href='/pages/contactus'>
            <li  className='ml-4 hover:border-b-2 border-orange-200'> Contact Us</li>
            </Link>
            <Link href='/pages/aboutUs'>
            <li  className='ml-4 hover:border-b-2 border-orange-200'>About Us</li>
            </Link>
            <Link href='/'>
            <li  className='mr-4 hover:border-b-2 border-orange-200'> Settings </li>
            </Link>
            </ul>
        </nav>
        <main className=' flex flex-col justify-center items-center h-screen '>
       
            <h1 className='text-4xl lg:text-8xl font-extrabold m-4'> CARTHAIR </h1>
           
           
            <p className='text-orange-200 font-extralight'>Our mission is to streamline your salon operations <br/> and help you deliver exceptional customer service.</p>
           
            <div className='p-4 m-8 justify-items-center'>
                <Link href='/login'>
                <button className='border-2 border-gray-900 rounded-lg bg-orange-200 text-gray-800 hover:bg-gray-800 hover:text-orange-200 hover:border-gray-200 p-4'>Get Started</button>
                </Link>
                
            </div>
        </main>
    </div>
  )
}

export default LandinPage