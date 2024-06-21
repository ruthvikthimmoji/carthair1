import Link from 'next/link'
import React from 'react'
import { HiUserAdd } from 'react-icons/hi'

const AddCustomers = () => {
  return (
    <div className='text-2xl p-2'>
      <Link href={"/addCustomers"}>
        <button className='hover:bg-transparent hover:border  px-6 py-2 ml-4 rounded-lg text-gray-800 bg-orange-500 hover:text-orange-400'>
          <HiUserAdd />
        </button>
      </Link>
    </div>
  )
}

export default AddCustomers