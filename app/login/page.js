import React from 'react'
import { HiLogin } from 'react-icons/hi'
import NavBar1 from '../../components/NavBar1'

const LoginPage = () => {
  return (
    <div>
      <NavBar1/>
      <div className='h-screen flex flex-col justify-center items-center'>
        <form className='border-2 border-orange-200 rounded-lg shadow-lg shadow-orange-200 px-8 pt-6 pb-8 mb-4'>
          <h1 className='flex flex-col justify-center items-center text-2xl font-bold p-4 m-4'>
            LOGIN
          </h1>
          <div className=' flex flex-col justify-center p-4'>
            <label htmlFor='tel' className='font-serif p-2 '>
              Phone Number</label>
            <input type='email' id='email' className='border-b-2  border-orange-400 bg-transparent  py-2 px-5' />
          </div>
          <div className=' flex flex-col justify-center p-4'>
            <label htmlFor='password' className='font-serif p-2'>
              OTP</label>
            <input type='password' id='password' className=' border-b-2 border-orange-400 bg-transparent py-2 px-3' />
          </div>
          <div class="rounded flex justify-start">
            <label class="flex items-center p-4">
              <input type="checkbox" class="form-checkbox text-grey-400 bg-gray-500" />
              <span className='font-thin text-xs p-2'>
                Remember me</span>
            </label>
          </div>
          <div className='flex flex-col  justify-center items-center  border rounded-lg hover:bg-transparent hover:text-white  hover:border-orange-400 py-2 px-3 bg-orange-400  text-gray-800'>
            <button className='text-2xl' >
              <HiLogin />
            </button>
          </div>
        </form>
      </div>
      <footer className=" flex flex-col justify-center items-center">
        <div className="text-center font-extralight" >
          <span>&copy; SalonApp. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage