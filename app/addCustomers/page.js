"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as Realm from "realm-web";

const loginEmailPassword = async (email, password) => {
  const app = new Realm.App({ id: process.env.MONGO_API_REALM_ID});
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  return user;
};

const addCustomers = async (name, phonenumber, date, attendant, services) => {
  if (!name || !phonenumber || !date || !attendant || !services) {
    alert("All fields are required.");
    return null;
  }

  try {
    const user = await loginEmailPassword(process.env.MONGO_USER_EMAIL, process.env.MONGO_USER_PASSWORD);

    const owner_id=localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
    if(owner_id==null){
      return {};
  }
    const res = await fetch(process.env.MONGO_API_ENDPOINT + '/insertOne', {
      method: 'POST',
      headers: {
        'Access-Control-Request-Headers': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.accessToken
      },
      cache: "no-cache",
      body: JSON.stringify({
        "collection": "customers",
        "database": "customersDB",
        "dataSource": "Cluster0",
        "document": {
          "name": name,
          "phonenumber": phonenumber,
          "date": date,
          "attendant": attendant,
          "services": services,
          "owner_id": owner_id
        }
      })
    });

    if (!res.ok) {
      throw new Error("Failed to add customer");
    }

    return res.json();
  } catch (error) {
    console.error("Error in adding customer", error);
    return null;
  }
};

export default function AddCustomers() {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [date, setDate] = useState('');
  const [attendant, setAttendant] = useState('');
  const [services, setServices] = useState('');
  const [customers, setCustomers] = useState([]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addCustomers(name, phonenumber, date, attendant, services);
    if (result) {
      setCustomers([...customers, result]);
      setName('');
      setPhonenumber('');
      setDate('');
      setAttendant('');
      setServices('');
      router.push('/pages/customers');
      alert('Customer added successfully!');
    }
  };

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
        <form onSubmit={handleSubmit} className='w-full max-w-sm backdrop-blur-0 shadow-[0_0_5px_0] p-6 lg:p-16 rounded-lg'>
          <div className='mb-4'>
            <label className='block text-orange-200 text-sm mb-2'>Customer Name</label>
            <input
              className='shadow border rounded w-full py-2 px-3 text-orange-400 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>Phone Number</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setPhonenumber(e.target.value)}
              value={phonenumber}
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>Date</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type='date'
              placeholder='dd/mm/yyyy'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>Services</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setServices(e.target.value)}
              value={services}
              type='text'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>Attendant</label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setAttendant(e.target.value)}
              value={attendant}
              type='text'
            />
          </div>
          <div className='flex items-center justify-center'>
            <button className='text-gray-800 bg-orange-500 hover:text-orange-400 hover:bg-transparent hover:border border-orange-400 font-bold py-2 px-8 rounded' type='submit'>
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
