"use client";
import React, { useState } from 'react'
import NavBar1 from '../../components/NavBar1'
import { useRouter } from 'next/navigation'



export default function AddCustomers() {
    const [name, setName] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [date, setDate] = useState();
    const [attendant, setAttendant] = useState();
    const [services, setServices] = useState();

    const router = useRouter()

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
            if (!res.ok) {
                router.push('/')
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
                <NavBar1 />
            </div>
            <h1>Add Customers Details</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label> Customer Name </label>
                    <input onChange={(e) => setName(e.target.value)} value={name} className='bg-transparent text-white' type='text' />
                    <label> Phone Number </label>
                    <input onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} className='bg-transparent text-white' type="tel" id="phone" name="phone" />
                    <label> Date Visited </label>
                    <input onChange={(e) => setDate(e.target.value)} value={date} type='Date' className='bg-transparent text-white' placeholder='dd/mm/yyyy' />
                    <label> Services </label>
                    <input onChange={(e) => setAttendant(e.target.value)} value={attendant} className='bg-transparent text-white' type='text' />
                    <label> Attendant </label>
                    <input onChange={(e) => setServices(e.target.value)} value={services} className='bg-transparent text-white' type='text' />
                    <button>Add Customers </button>
                </form>
            </div>
        </div>
    )
}

