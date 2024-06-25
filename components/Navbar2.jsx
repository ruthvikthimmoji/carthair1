import React from 'react'

export default function Navbar2() {
  return (
    <div className=''>
      <div className='flex  flex-row justify-between p-8 pr-5 border-b-2 border-orange-200 backdrop:blur-lg bg-orange-200/10'>
       
         <h1 className='text-4xl'>
          CARTHAIR</h1> 
  
  <ul className='flex gap-9  '>
  <li className='p-2 font-thin'>
  <a href='/'> Home</a> </li>
  <li className='p-2 font-thin'>
   <a href='/pages/contactus'> About Us</a> </li>
  <li className='p-2 font-thin'>
   <a href='/pages/contactus'> Contact Us</a> </li>
  <button className='border-2 drop-shadow-lg rounded-full border-orange-400 px-4 p-2'> 
  <li className='font-thin'>
   <a href='/login'> Login </a> </li>
  </button>
</ul>
  </div>
    </div>
  )
}
