import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'

function NavBar() {
  return (
    <div className="mx-auto p-4 mt-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold glow-text">
          CARTHAIR
        </h1>
        <button className="border-orange-200  text-3xl px-4 py-2 rounded-lg hover:bg-orange-200 hover:text-gray-800">
        <AiOutlineLogout/></button>
      </div>
  )
}

export default NavBar