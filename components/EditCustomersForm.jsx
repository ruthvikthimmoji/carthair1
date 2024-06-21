"use client";
import React, { useState } from 'react'
import NavBar1 from './NavBar1'
import { useRouter } from 'next/navigation';

export default function EditCustomersForm({id, name, phonenumber, date, attendant, services}) {
    const [newName, setNewName] = useState(name);
    const [newPhonenumber, setNewPhonenumber] = useState(phonenumber);
    const [newDate, setNewDate] = useState(date);
    const [newAttendant, setNewAteendant] = useState(attendant);
    const [newServices, setNewServices] = useState(services);
const router = useRouter();

const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/customers/${id}`,{
        method:"PUT",
        headers:{
         "Content-type":"application/json",
        },
        body:JSON.stringify({newName,newPhonenumber,newDate,newServices,newAttendant}),
      })
      if(!res.ok){
        throw new Error("failed to update");
      }
      router.push('/');
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
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewName(e.target.value)} value={newName} type='text' />
                            <label className='p-2  text-gray-800'> Phone Number : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewPhonenumber(e.target.value)} value={newPhonenumber}
                                type="tel" id="phone" name="phone"  />
                            <label className='p-2  text-gray-800'> Date :</label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewDate(e.target.value)} value={newDate}
                                type='Date' placeholder='dd/mm/yyyy' />
                            <label className='p-2 text-gray-800'> Services :</label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewServices(e.target.value)} value={newServices}
                                type='text' />
                            <label className='p-2  text-gray-800'> Attendant : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' onChange={(e) => setNewAteendant(e.target.value)} value={newAttendant}
                                type='text' />
                            <button className="mt-6 mb-4 px-4 py-2 rounded-md bg-orange-500 rounded-badge">
                                Update Customers </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
