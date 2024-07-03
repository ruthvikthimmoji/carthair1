"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



export default function AddOffers() {
    const [title, setTitle] = useState();
    const [description, setdescription] = useState();
    const [isActive, setIsActive] = useState();

    const router = useRouter('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !isActive) {
            alert("required field");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/offers", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ title, description, isActive })
            })
            if (res.ok) {
                router.push('./pages/offers');
                router.refresh();
            } else {
                throw new Error("failed to create")
            }

        } catch (error) {
            console.log("failed to create", error)
        }
    }

    return (

        <div>
            <div>
            </div>
            <h1 className='flex justify-center glow-text text-4xl font-thin p-10'>
                Add Offers Details
            </h1>
            <div className=' flex justify-center items-center p-10'>
                <form className=' flex flex-col justify-center rounded-lg px-4 py-2 bg-orange-200' onSubmit={handleSubmit} >
                    <div className='flex flex-col justify-center shadow-lg shadow-black rounded-lg px-4 py-2 m-4 '>
                        <label className='p-2 text-gray-800'>
                            Title
                        </label>
                        <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setTitle(e.target.value)} value={title} type='text' />
                        <label className='p-2 text-gray-800'>
                            Description </label>
                        <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setdescription(e.target.value)} value={description} type="text" />
                        <label className='p-2 text-gray-800'>
                            isActive </label>
                        <input className='flex  flex-col justify-start items-start rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setIsActive(e.target.value)} value={isActive} type='checkbox' />

                        <button className='hover:bg-transparent hover:border  px-6 py-2 ml-4 mb-4 rounded-lg text-gray-800 bg-orange-500 hover:text-orange-400'>
                            Add Offers </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

