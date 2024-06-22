import React from 'react'
import { FaAd, FaDotCircle } from 'react-icons/fa'

export default function Spinner() {
  return (
    <div className='flex items-center w-full justify-center'>
        <div className='w-10 h-10 border-2 border-orange-400  border-solid rounded-full animate-spin'>
           
        </div>
    </div>
  )
}
