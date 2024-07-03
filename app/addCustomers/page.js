"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';



export default function AddCustomers() {
    const [name, setName] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [date, setDate] = useState();
    const [attendant, setAttendant] = useState();
    const [services, setServices] = useState();

    const router = useRouter('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !phonenumber || !date || !attendant || !services) {
            alert("required field");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/customers", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ name, phonenumber, date, attendant, services })
            })
            if (res.ok) {
                router.push('./pages/customers');
                router.refresh();
            } else {
                throw new Error("failed to create")
            }

        } catch (error) {
            console.log("failed to create", error)
        }
    }

    return (

        <div className='flex flex-col lg:flex-row h-screen'>
          <div className='flex-1 relative'>
        <Image
          src='/2.svg'
          alt='404'
          width={1080}
          height={1920}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex-1 flex flex-col items-center justify-center p-4 lg:p-10'>
        <h1 className='text-4xl font-thin glow-text mb-4 lg:mb-6 p-6'> ADD CUSTOMERS</h1>
        <form onSubmit={handleSubmit}
          className='w-full max-w-sm backdrop-blur-0 shadow-[0_0_5px_0] p-6 lg:p-16 rounded-lg'>
          <div className='mb-4'>
            <label className='block text-orange-200 text-sm mb-2' >
              Customer Name
            </label>
            <input
              className='shadow border rounded w-full py-2 px-3 text-orange-400 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setName(e.target.value)} value={name}  type='text'/>
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' >
              Phone Number
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
             onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber}  type="tel" id="phone" name="phone"/>
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Date
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setDate(e.target.value)} value={date} type='Date'  placeholder='dd/mm/yyyy' />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Services
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
               onChange={(e) => setServices(e.target.value)} value={services} type='text'/>
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' >
            Attendant
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setAttendant(e.target.value)} value={attendant} type='text'  />
          </div>
          <div className='flex items-center justify-center '>
            <button className=' text-gray-800 bg-orange-500 hover:text-orange-400 hover:bg-transparent hover:border border-orange-400 font-bold py-2 px-8 rounded ' type='button'>
              Add Customers
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

