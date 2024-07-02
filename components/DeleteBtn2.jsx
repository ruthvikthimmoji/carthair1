"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiTrash } from 'react-icons/hi'

const DeleteBtn = ({id}) => {
  const router = useRouter('');
  const removeOffers = async()=>{
    const confirmed = confirm("Are you Sure");

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/offers?id=${id}`,{
        cache:"no-store",
        method : "DELETE",
      });
      if(res.ok){
        router.push('/pages/offers');
        router.refresh();
      }
    }
  }
  return (
    <>
     <button 
      onClick={() => removeOffers(id)} 
      className='flex justify-center items-center hover:bg-orange-400 hover:text-gray-800 px-4 py-2 mr-2 lg:px-6 lg:py-2 lg:mr-4 border border-orange-400 rounded-lg'
    >
      <HiTrash /> 
    </button>
   </>
  )
}


export default DeleteBtn