import React from 'react'

export default function Navbar2() {
  return (
    <div>
      <div className='flex  flex-row justify-between p-8 pr-5 border-b-2 border-orange-200 backdrop:blur-lg bg-orange-200/10'>
       
         <h1 className='text-4xl'>
          CARTHAIR</h1> 
  
  <ul className='flex gap-9 '>
<li className='p-2 font-thin'>
  Home</li>
  <li className='p-2 font-thin'>
    About</li>
  <li className='p-2 font-thin'>
    Contactus</li>
  <li  className='p-2 font-thin'>
    Settings</li>
  <button className='border-2 drop-shadow-lg rounded-full border-orange-400 px-4 p-2'> 
  <li className='font-thin'> 
    Login/signup </li>
  </button>
</ul>
  </div>
    </div>
  )
}
