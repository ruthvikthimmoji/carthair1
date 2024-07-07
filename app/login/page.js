"use client"
import React, { useState } from 'react'
import { FaPhoneAlt, FaShieldAlt, FaSpinner } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { auth } from '../firebase.config'
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth'
import { useRouter } from 'next/navigation'




export default function LoginPage() {
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [showOtp, setShowOtp] = useState(false)
  const [user,setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChangePh = (e) => {
    setPh(e.target.value)
  }

  const handleChangeOtp = (e) => {
    setOtp(e.target.value)
  }


function onCaptchVerify () {
  if (!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        onSignup()
      },
      'expired-callback': () => {},
    });
    
  }
}

function onSignup(){
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

function onOTPVerify(){
  setLoading(true)
  window.confirmationResult.confirm(otp).then (async(res)=>{
    console.log(res);
    setUser(res.user);
    setLoading(false);
    router.push('/home')
  }).catch(err=>{
    console.log(err);
    setLoading(false);
  })
}




  return (
    <section className='bg-grey-400 flex items-center justify-center h-screen'>
      <div>
        <div id='recaptcha-container'></div>
        {user ? (
            <h2 className='text-center font-medium text-2xl'>
            👍 Login Success
          </h2>
          ):(
        <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
          <h1> welcome</h1>
          {
            showOtp ?(
              <>
                <div className='bg-orange-200 rounded-full w-fit p-4 mx-auto text-gray-800'>
                  <FaShieldAlt size={30} />
                </div>
                <label htmlFor='otp'
                  className='font-bold text-2xl text-center'>
                  Enter Your OTP
                </label>
                <input type='otp' value={otp}
                  onChange={handleChangeOtp}>
                </input>
                <button onClick={onOTPVerify}
                 className='bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 rounded'>
                  {loading && <HiSparkles size={30} className='mt-1 animate-pulse' />
                  }
                  <span>Verify OTP</span>
                </button>
              </> ):(
              <>
                <div className='bg-orange-200 rounded-full w-fit p-4 mx-auto text-gray-800'>
                  <FaPhoneAlt size={30} />
                </div>
                <label htmlFor=''
                  className='font-bold text-xl text-center'>
                  Enter Your PhoneNumber
                </label>
                <input type='tel' value={ph} onChange={handleChangePh} />
                <button onClick={onSignup} className='bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 rounded'>
                  {loading && <HiSparkles size={30} className='mt-1 animate-pulse' />
                  }
                  <span>Send OTP</span>
                </button>
              </>
          )}
        </div>
              )}

      </div>
    </section>
  )
}
