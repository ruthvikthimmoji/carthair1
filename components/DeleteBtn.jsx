"use client"
import { DELETE } from '@/app/api/customers/route';
import React from 'react'
import { HiTrash } from 'react-icons/hi'

const DeleteBtn = (id) => {
  const removeCustomers = async()=>{
    const confirmed = confirm("Are you Sure");
    if(confirmed){
      await fetch(`http://localhost:3000/api/customers?id=${id}`,{
        method : "DELETE",
      });
    };

  }
  return (
    <>
    <button onClick={removeCustomers} className=' flex justify-center hover:bg-orange-400 hover:text-gray-800 px-6 py-2 mr-4 border border-orange-400 rounded-lg '>
      <HiTrash/> 
    </button>
   </>
  )
}


export default DeleteBtn