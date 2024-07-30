"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as Realm from "realm-web";

const loginEmailPassword = async (email, password) => {
  const app = new Realm.App({ id: 'data-gacfoem'});
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  return user;
};

const addOffers = async (title, description, isActive) => {
  if (!title || !description || isActive === undefined) {
    alert("Required fields are missing");
    return;
  }

  try {
    const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
    if (owner_id == null) {
      return {};
    }
    const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
    const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/insertOne', {
      method: 'POST',
      headers: {
        'Access-Control-Request-Headers': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.accessToken
      },
      cache: "no-cache",
      body: JSON.stringify({
        "collection": "offers",
        "database": "offersDB",
        "dataSource": "Cluster0",
        "document": {
          "title": title,
          "description": description,
          "isActive": isActive,
          "owner_id": owner_id
        }
      })
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Offers");
    }
    alert("Offer added successfully!");
    return res.json();
  } catch (error) {
    console.error("Error in Loading", error);
    return { offers: [] };
  }
};

export default function AddOffers() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [offers, setOffers] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addOffers(title, description, isActive);
    if (result) {
      setOffers([...offers, result]);
      setTitle("");
      setDescription("");
      setIsActive(true);
      router.push('/pages/offers');
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
        <h1 className='text-4xl font-thin glow-text mb-4 lg:mb-6 p-6'> Add Offers</h1>
        <form onSubmit={handleSubmit} className='w-full max-w-sm backdrop-blur-0 shadow-[0_0_5px_0] p-6 lg:p-16 rounded-lg'>
          <div className='mb-4'>
            <label className='block text-orange-200 text-sm mb-2'>
              Title
            </label>
            <input
              className='shadow border rounded w-full py-2 px-3 text-orange-400 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2'>
              Description
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
            />
          </div>
          <div className='flex items-center justify-center'>
            <button className='text-gray-800 bg-orange-500 hover:text-orange-400 hover:bg-transparent hover:border border-orange-400 font-bold py-2 px-8 rounded' type='submit'>
              Add Offers
            </button>
          </div>
        </form>
        {/* Display the added offers
        <div className='mt-10 w-full'>
          <ul>
            {offers.map((offer, index) => (
              <li key={index} className='mb-2'>
                <strong>Title:</strong> {offer.document.title}<br />
                <strong>Description:</strong> {offer.document.description}<br />
                <strong>Active:</strong> {offer.document.isActive ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
}
