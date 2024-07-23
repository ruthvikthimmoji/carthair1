"use client";
import React, { useState, useEffect } from 'react';
import * as Realm from "realm-web";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";


async function loginEmailPassword(email, password) {
  const app = new Realm.App({ id: 'data-gacfoem' });
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  return user;
}

const updateCustomer = async (id, customer) => {
  try {
    const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
    const res = await fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action/updateOne`, {
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
        "filter": { "_id": { "$oid": id } },
        "update": {
          "$set": {
            name: customer.name,
            phonenumber: customer.phonenumber,
            date: customer.date,
            services: customer.services,
            attendant: customer.attendant
          }
        }
      })
    });
    if (!res.ok) {
      throw new Error("Failed to Upadate Customer");
    }
    return res.json();
  } catch (error) {
    console.error("enter in Updating customer", error);
    return null;
  }
};

const getCustomerById = async (id) => {
  try {
    const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
    const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action/findOne', {
      method: 'POST',
      headers: {
        'Access-Control-Request-Headers': '*',
        'Content-Type': 'application/ejson',
        'Authorization': 'Bearer ' + user.accessToken
      },
      cache: "no-cache",
      body: JSON.stringify({
        "collection": "customers",
        "database": "customersDB",
        "dataSource": "Cluster0",
        "filter": {
          "_id": { "$oid": id }
        }
      })
    });

    if (res.ok) {
      const data = await res.json();
      return data.document;
    } else {
      console.log("Failed to fetch Offers");
      return {};
    }
  } catch (error) {
    console.log("Error in fetching", error);
    return {};
  }
}

const EditCustomer = () => {
  const pathname = usePathname();
  const [customer, setCustomer] = useState(null);
  const id = pathname.split("/").pop();
  const router = useRouter();

  const fetchData = async () => {
    const fetchedCustomer = await getCustomerById(id);
    setCustomer(fetchedCustomer);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateCustomer(id, customer);
    if (result) {
      alert("Custer updated Successfully!");
      router.push("/pages/customers");
    } else {
      alert("failed to update Customer");
    }
  };

  if (!customer) {
    return <div>Loading....</div>
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
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })} value={customer.name} type='text'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' >
              Phone Number
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setCustomer({ ...customer, phonenumber: e.target.value })} value={customer.phonenumber}
              type="tel" id="phone" name="phone" />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Date
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setCustomer({ ...customer, date: e.target.value })} value={customer.date}
              type='Date' placeholder='dd/mm/yyyy' />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Services
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setCustomer({ ...customer, services: e.target.value })} value={customer.services}
              type='text' />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' >
              Attendant
            </label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setCustomer({ ...customer, attendant: e.target.value })} value={customer.attendant}
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
export default EditCustomer;