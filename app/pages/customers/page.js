import CustomersList from '@/components/CustomersList'
import NavBar from '@/components/NavBar'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <CustomersList/>
      </div>
    </div>
  )
}

export default HomePage