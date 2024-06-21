import CustomersList from '@/components/CustomersList'
import NavBar1 from '@/components/NavBar1'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <NavBar1/>
      <div>
        <CustomersList/>
      </div>
    </div>
  )
}

export default HomePage