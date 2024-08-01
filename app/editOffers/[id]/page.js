"use client";
import React, { useEffect, useState } from 'react';
import * as Realm from "realm-web";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import { bouncy } from 'ldrs';

bouncy.register();

// Function to log in with email and password
async function loginEmailPassword(email, password) {
  const app = new Realm.App({ id: 'data-gacfoem' });
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  return user;
}

// EditOffer page component
const EditOffer = () => {
  const pathname = usePathname();
  const [offer, setOffer] = useState(null);
  const id = pathname.split("/").pop();
  const router = useRouter();

  const fetchData = async () => {
    const fetchedOffer = await getOfferById(id);
    setOffer(fetchedOffer);
  };
  useEffect(() => {
    const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
    if (owner_id == null) {
      router.replace("/");
    }
    fetchData();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateOffer(id, offer);
    if (result) {
      alert("Offer updated successfully!");
      router.push("/pages/offers");
    } else {
      alert("Failed to update offer");
    }
  };

  const updateOffer = async (id, offer) => {
    try {
      const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
      if (owner_id == null) {
        router.replace("/");
      }
      const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
      const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/updateOne', {
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
          "filter": { "_id": { "$oid": id }, "owner_id": owner_id },
          "update": {
            "$set": {
              title: offer.title,
              description: offer.description
            }
          }
        })
      });
      if (!res.ok) {
        throw new Error("Failed to update offer");
      }
      return res.json();
    } catch (error) {
      console.error("Error in updating offer", error);
      return null;
    }
  };

  // Function to get offer by ID
  const getOfferById = async (id) => {
    try {
      const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
      if (owner_id == null) {
        router.replace("/");
      }
      const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
      const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/findOne', {
        method: 'POST',
        headers: {
          'Access-Control-Request-Headers': '*',
          'Content-Type': 'application/ejson',
          'Authorization': 'Bearer ' + user.accessToken
        },
        cache: "no-cache",
        body: JSON.stringify({
          "collection": "offers",
          "database": "offersDB",
          "dataSource": "Cluster0",
          "filter": {
            "_id": { "$oid": id },
            "owner_id": owner_id
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

  if (!offer) {
    return (
      <div className='min-w-full flex items-center justify-center min-h-[100vh]'>
        <l-bouncy size="45" speed="1" color="white">
        </l-bouncy>
      </div>
    )
  }
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='flex-1 flex flex-col items-center justify-center p-4 lg:p-10'>
        <h1 className='text-4xl font-thin glow-text mb-4 lg:mb-6 p-6'>EDIT OFFERS</h1>
        <form onSubmit={handleSubmit} className='w-full max-w-sm backdrop-blur-0 shadow-[0_0_5px_0] p-6 lg:p-16 rounded-lg'>
          <div className='mb-4'>
            <label className='block text-orange-200 text-sm mb-2' htmlFor='title'>
              Title
            </label>
            <input
              id='title'
              className='shadow border rounded w-full py-2 px-3 text-orange-400 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setOffer({ ...offer, title: e.target.value })}
              value={offer.title}
              type='text'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-orange-200 text-sm mb-2' htmlFor='description'>
              Description
            </label>
            <input
              id='description'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight bg-transparent border-orange-400 focus:outline-none focus:shadow-outline'
              onChange={(e) => setOffer({ ...offer, description: e.target.value })}
              value={offer.description}
              type='text'
            />
          </div>
          <div className='flex items-center justify-center'>
            <button className='text-gray-800 bg-orange-500 hover:text-orange-400 hover:bg-transparent hover:border border-orange-400 font-bold py-2 px-8 rounded' type='submit'>
              Update
            </button>
          </div>
        </form>
      </div>
      <div className='flex-1 relative'>
        <Image
          src='/2.svg'
          alt='404'
          width={1080}
          height={1920}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}

export default EditOffer;
