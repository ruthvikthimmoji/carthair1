import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddOffers = () => {
  return (
    <div className='text-2xl'>
        <button className='border-orange-400 px-6 py-2 rounded-lg hover:text-gray-800 hover:bg-orange-500'>
        <FaPlus/>
        </button>
       </div> 
  )
}

export default AddOffers