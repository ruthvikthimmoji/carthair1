"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'



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

        <div>
            <div>
            </div>
            <h1 className='flex justify-center glow-text text-4xl font-thin p-10'>
                Add Customers Details
                </h1>
            <div className=' flex justify-center items-center p-10'>
                <form className=' flex flex-col justify-center rounded-lg px-4 py-2 bg-orange-200' onSubmit={handleSubmit} >
                <div className='flex flex-col justify-center shadow-lg shadow-black rounded-lg px-4 py-2 m-4 '>
                    <label className='p-2 text-gray-800'>
                         Customer Name 
                         </label>
                    <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setName(e.target.value)} value={name}  type='text' />
                    <label className='p-2 text-gray-800'>
                        Phone Number </label>
                    <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber}  type="tel" id="phone" name="phone" />
                    <label className='p-2 text-gray-800'>
                        Date </label>
                    <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setDate(e.target.value)} value={date} type='Date'  placeholder='dd/mm/yyyy' />
                    <label className='p-2 text-gray-800'>
                        Services </label>
                    <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setAttendant(e.target.value)} value={attendant}  type='text' />
                    <label className='p-2 text-gray-800'>
                        Attendant </label>
                    <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setServices(e.target.value)} value={services} type='text' />
                    </div>
                    <button className='hover:bg-transparent hover:border  px-6 py-2 ml-4 mb-4 rounded-lg text-gray-800 bg-orange-500 hover:text-orange-400'>
                        Add Customers </button>
                </form>
            </div>
        </div>
    )
}

