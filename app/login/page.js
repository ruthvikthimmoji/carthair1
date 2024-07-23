"use client"
import React, { useState } from 'react'
import { FaPhoneAlt, FaShieldAlt, FaSpinner } from 'react-icons/fa'
import { HiScissors, HiSparkles } from 'react-icons/hi'
import { auth } from '../firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Image from 'next/image'




export default function LoginPage() {
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [showOtp, setShowOtp] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChangePh = (e) => {
    setPh(e.target.value)
  }

  const handleChangeOtp = (e) => {
    setOtp(e.target.value)
  }


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          onSignup()
        },
        'expired-callback': () => { },
      });

    }
  }

  function onSignup() {
    setLoading(true)
    onCaptchVerify()
    const appVerifier = window.recaptchaVerifier


    const formatPh = '+' + ph
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }

  function onOTPVerify() {
    setLoading(true)
    window.confirmationResult.confirm(otp).then(async (res) => {
      console.log(res);
      localStorage.setItem('owner', user)
      setUser(res.user);
      setLoading(false);
      router.push('/home')
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })
  }




  return (

    <section className='bg-grey-400 flex flex-col lg:flex-row items-center justify-center h-screen'>
      <div className='flex-1 flex flex-col items-center justify-center p-4 lg:p-10'>
        <div id='recaptcha-container'></div>
        {user ? (
          <h2 className='text-center font-medium text-2xl'>
            👍 Login Success
          </h2>
        ) : (
          <div className='w-80 flex flex-col gap-4  rounded-lg p-4'>
            <h1 className='flex justify-center items-center font-bold  text-4xl p-6 glow-text'
            > WELCOME 👋 </h1>
            {
              showOtp ? (
                <>
                  <div className='bg-orange-200 rounded-full w-fit p-4 mx-auto text-gray-800'>
                    <FaShieldAlt size={30} />
                  </div>
                  <label htmlFor='otp'
                    className='font-thin text-2xl text-center'>
                    Enter Your OTP
                  </label>
                  <input
                  type='otp' 
                  value={otp}
                  onChange={handleChangeOtp}
                  className='bg-transparent border py-2 pl-4 border-orange-600 rounded-full'>
                  </input>
                  <button onClick={onOTPVerify}
                  className='bg-orange-600 text-gray-800 hover:border hover:bg-transparent  hover:text-orange-600 border border-orange-600 w-full flex gap-1 items-center justify-center py-2.5 rounded-full'>
                    {loading && <HiSparkles size={30} className='mt-1 animate-pulse' />
                    }
                    <span>Verify OTP</span>
                  </button>
                </>) : (
                <>
                  <div className='bg-orange-200 rounded-full w-fit p-4 mx-auto text-gray-800'>
                    <FaPhoneAlt size={30} />
                  </div>
                  <label htmlFor=''
                    className='font-thin  text-2xl text-center'>
                    Enter Your<br/> Phone Number
                  </label>
                  <input 
                  type='tel' 
                  value={ph} 
                  onChange={handleChangePh} 
                  className='bg-transparent border py-2 pl-4 border-orange-600 rounded-full'/>
                  <button onClick={onSignup} 
                  className='bg-orange-600 text-gray-800 hover:border hover:bg-transparent  hover:text-orange-600 border border-orange-600 w-full flex gap-1 items-center justify-center py-2.5 rounded-full'>
                    {loading && <HiSparkles size={30} className='mt-1 animate-pulse' />
                    }
                    <span>Send OTP</span>
                  </button>
                </>
              )}
          </div>
        )}

      </div>
      <div className='flex-1 relative'>
        <Image
          src='/2.svg'
          alt='404'
          width={1080}
          height={1920}
          className='w-full h-full object-cover'
        />
      </div>
    </section>
   

    
  )
}
