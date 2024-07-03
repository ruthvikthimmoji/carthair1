import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function LoginPage() {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='flex-1 flex flex-col items-center justify-center p-4 lg:p-10'>
        <h1 className='text-3xl font-bold mb-4 lg:mb-6 p-6'>CARTHAIR</h1>
        <h1 className='text-xl mb-6 lg:mb-8'>Login</h1>
        <form className='w-full max-w-sm backdrop-blur-0 shadow-[0_0_5px_0] p-6 lg:p-16 rounded-lg'>
          <div className='mb-4'>
            <label className='block text-orange-200 text-sm mb-2' htmlFor='tel'>
              Phone Number
            </label>
            <input className='shadow border rounded w-full py-2 px-3 text-orange-400 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline' id='tel' type='tel' placeholder='Phone Number' />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' htmlFor='password'>
              OTP
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline' id='password' type='password' />
          </div>
          <div className='flex items-center justify-between'>
            <Link href='/home'>
            <button className=' text-gray-800 bg-orange-500 hover:text-orange-400 hover:bg-transparent hover:border border-orange-400 font-bold py-2 px-6 rounded ' type='button'>
              Login
            </button>
            </Link>
          </div>
        </form>
      </div>
      <div className='flex-1 relative'>
        <Image
          src='/img4.jpg'
          alt='404'
          width={1080}
          height={1920}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}

export default LoginPage;
