"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiTrash } from 'react-icons/hi'

const DeleteBtn = ({id}) => {
  const router = useRouter('');
  const removeCustomers = async()=>{
    const confirmed = confirm("Are you Sure");

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/customers?id=${id}`,{
        cache:"no-store",
        method : "DELETE",
      });
      if(res.ok){
        router.push('/pages/customers');
        router.refresh();
      }
    }
  }
  return (
    <>
    <button onClick={()=> removeCustomers(id)} className=' flex justify-center hover:bg-orange-400 hover:text-gray-800 px-6 py-2 mr-4 border border-orange-400 rounded-lg '>
      <HiTrash/> 
    </button>
   </>
  )
}


export default DeleteBtn