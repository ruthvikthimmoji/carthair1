"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EditCustomersForm({ id, customer }) {
    const [newCustomer, setNewCustomer] = useState(customer);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/customers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newCustomer),
            })
            if (!res.ok) {
                throw new Error("failed to update");
            }
            router.push('/pages/customers');
            router.refresh();
        } catch (error) {
            console.log(error);
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
        <h1 className='text-4xl font-thin glow-text mb-4 lg:mb-6 p-6'> EDIT CUSTOMERS</h1>
        <form onSubmit={handleSubmit}
          className='w-full max-w-sm backdrop-blur-0 shadow-[0_0_5px_0] p-6 lg:p-16 rounded-lg'>
          <div className='mb-4'>
            <label className='block text-orange-200 text-sm mb-2' >
              Customer Name
            </label>
            <input
              className='shadow border rounded w-full py-2 px-3 text-orange-400 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} value={newCustomer.name} type='text'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' >
              Phone Number
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setNewCustomer({ ...newCustomer, phonenumber: e.target.value })} value={newCustomer.phonenumber}
              type="tel" id="phone" name="phone" />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Date
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setNewCustomer({ ...newCustomer, date: e.target.value })} value={newCustomer.date}
              type='Date' placeholder='dd/mm/yyyy' />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Services
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setNewCustomer({ ...newCustomer, services: e.target.value })} value={newCustomer.services}
              type='text' />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' >
            Attendant
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setNewCustomer({ ...newCustomer, attendant: e.target.value })} value={newCustomer.attendant}
              type='text' />
          </div>
          <div className='flex items-center justify-center '>
            <button className=' text-gray-800 bg-orange-500 hover:text-orange-400 hover:bg-transparent hover:border border-orange-400 font-bold py-2 px-8 rounded ' type='submit'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
