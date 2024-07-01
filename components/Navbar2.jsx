import React from 'react';

export default function Navbar2() {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row justify-between p-6 lg:p-8 border-b-2 border-orange-200 backdrop:blur-lg bg-orange-200/10'>
        <h1 className='text-2xl lg:text-4xl'>CARTHAIR</h1>
        <ul className='flex flex-col lg:flex-row gap-4 lg:gap-9 mt-4 lg:mt-0'>
          <li className='p-2 font-thin'>
            <a href='/'>Home</a>
          </li>
          <li className='p-2 font-thin'>
            <a href='/pages/contactus'>About Us</a>
          </li>
          <li className='p-2 font-thin'>
            <a href='/pages/contactus'>Contact Us</a>
          </li>
          <li className='font-thin'>
            <button className='border-2 drop-shadow-lg rounded-full border-orange-400 px-4 py-2'>
              <a href='/login'>Login</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
