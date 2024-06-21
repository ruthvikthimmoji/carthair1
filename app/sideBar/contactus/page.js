import React from 'react'
import Image from 'next/image'
import { FaHome, FaMailBulk, FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import NavBar from './components/NavBar'

const page = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className="flex flex-col justify-center items-center p-60  bg-cover bg-center" style={{ backgroundImage: "url('./back.jpg')" }}>
        <h1 className='text-6xl'>
          CONTACT US
        </h1>
        <h1>...........</h1>
        <p className='flex-col p-4'>
          Need an Expert?  You are more than loved to leave your contact<br />
        </p>
        <p>
          info and we will be in touch shortly.
        </p>
      </div>


      <div className='flex flex-row justify-between p-12 mt-16 '>
        <div className=' flex flex-col justify-center items-center p-6'>
          <FaHome className='text-5xl' />
          <h1 className='p-6 glow-text'>
            visit Us</h1>
          <p className='text-xs font-thin'>
            Lorem Ipsum is simply dummy text <br /></p>
          <p className=' text-xs font-thin'>
            of the printing and typesetting industry.</p>
          <a href='' className='p-2'>
            India</a>
        </div>


        <div className=' flex flex-col  justify-center items-center p-6'>
          <FaPhoneAlt className='text-5xl' />
          <h1 className='p-6'>
            call us</h1>
          <p className='text-xs font-thin'>
            Lorem Ipsum is simply dummy text <br /></p>
          <p className=' text-xs font-thin'>
            of the printing and typesetting industry.</p>
          <a href='tel' className='p-2'>
            +91 6361906550</a>
        </div>


        <div className=' flex flex-col justify-center items-center p-6'>
          <HiMail className='text-5xl' />
          <h1 className='p-6'>
            email Us</h1>
          <p className='text-xs font-thin'>
            Lorem Ipsum is simply dummy text <br /></p>
          <p className=' text-xs font-thin'>
            of the printing and typesetting industry.</p>
          <a className='p-2'>
            noreply@email.com</a>
        </div>

      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1013.0170947717461!2d73.91207928151448!3d18.57347435723205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718640732165!5m2!1sen!2sin" width="1685" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>

        <footer className=" flex flex-col justify-center items-center p-4">
          <div className="text-center mt-4 font-extralight" >
            <span>&copy; SalonApp. All rights reserved.</span>
          </div>
        </footer>

      </div>


    </div>
  )
}

export default page