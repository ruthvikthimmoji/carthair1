"use client";
import React, { useState } from 'react'
import NavBar1 from './NavBar1'
import { useRouter } from 'next/navigation';
import { GrUpdate } from 'react-icons/gr';

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
        <div>
            <NavBar1 />
            <div>
                <h1 className='flex justify-center glow-text text-4xl font-thin p-10'>EditCustomersForm</h1>
                <div className=' flex justify-center items-center p-10'>
                    <form onSubmit={handleSubmit} className=' flex flex-col justify-center rounded-lg px-4 py-2 bg-orange-200'>
                        <div className='flex flex-col justify-center shadow-lg shadow-black rounded-lg px-4 py-2 m-4 '>
                            <label className='p-2 text-gray-800' > Customer Name : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} value={newCustomer.name} type='text' />
                            <label className='p-2  text-gray-800'> Phone Number : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewCustomer({ ...newCustomer, phonenumber: e.target.value })} value={newCustomer.phonenumber}
                                type="tel" id="phone" name="phone" />
                            <label className='p-2  text-gray-800'> Date :</label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewCustomer({ ...newCustomer, date: e.target.value })} value={newCustomer.date}
                                type='Date' placeholder='dd/mm/yyyy' />
                            <label className='p-2 text-gray-800'> Services :</label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewCustomer({ ...newCustomer, services: e.target.value })} value={newCustomer.services}
                                type='text' />
                            <label className='p-2  text-gray-800'> Attendant : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewCustomer({ ...newCustomer, attendant: e.target.value })} value={newCustomer.attendant}
                                type='text' />
                            <button className="mt-6 mb-4 px-4 py-2 rounded-md bg-orange-500 flex flex-row justify-center items-center rounded-badge">
                                <span className='mr-2'>Update</span> <GrUpdate /> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
