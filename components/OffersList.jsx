"use client";
import React, { useState, useEffect } from "react";
import AddOffers from "./AddOffers";
import NavbarAll from "./NavbarAll";
import Link from 'next/link';
import { HiTrash, HiPencil } from 'react-icons/hi';
import * as Realm from "realm-web";
import { useRouter } from 'next/navigation';


export default function OffersList() {
  const [offers, setOffers] = useState([]);
  const [expandedOffer, setExpandedOffer] = useState(null);
  const router = useRouter();

  const fetchOffers = async () => {
    const { documents } = await getOffers();
    setOffers(documents);
  };

  useEffect(() => {
    const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
    if (owner_id == null) {
      router.replace("/");
    }
    fetchOffers();
  }, []);

  const toggleOffer = (index) => {
    if (expandedOffer === index) {
      setExpandedOffer(null);
    } else {
      setExpandedOffer(index);
    }
  };

  const getOffers = async () => {
    try {
      const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
      if (owner_id == null) {
        router.replace("/");
      }
      const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
      const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/find', {
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
          "filter": { "owner_id": owner_id },
          "projection": {}
        })
      });
      if (!res.ok) {
        throw new Error("Failed to fetch Offers");
      }
      return res.json();
    } catch (error) {
      console.error("Error in Loading", error);
      return { offers: [] };
    }
  };

  async function loginEmailPassword(email, password) {
    const app = new Realm.App({ id: 'data-gacfoem' });
    const credentials = Realm.Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);
    console.assert(user.id === app.currentUser.id);
    return user;
  }

  const removeOffers = async (id) => {

    try {
      const owner_id = localStorage.getItem("CARTHAIR_LOGGED_USER_ID");
      if (owner_id == null) {
        router.replace("/");
      }
      const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
      const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action' + '/deleteOne', {
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
        fetchOffers()
      } else {
        throw new Error("Failed to fetch Offers");
      }
    } catch (error) {
      console.error("Error in Deleting", error);
    }
  }

  const OfferAccordion = ({ offer, isOpen, toggleAccordion }) => {
    return (
      <div className="">
        <div className="flex justify-between items-center p-4 cursor-pointer bg-orange-400" onClick={toggleAccordion}>
          <h2 className="text-xl text-gray-800 font-semibold">{offer.title}</h2>
          <button className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </button>
        </div>
        {isOpen && (
          <div className="p-4 bg-gray-600 rounded-b-lg">
            <p className="mb-4">{offer.description}</p>
            <div className="flex justify-around">
              <button
                onClick={() => removeOffers(offer._id)}
                className='flex justify-center items-center hover:bg-orange-400 text-orange-400 hover:text-gray-800 h px-4 py-2 mr-2 lg:px-6 lg:py-2 lg:mr-4 border border-orange-400 rounded-lg'>
                <HiTrash />
              </button>
              <Link href={`/editOffers/${offer._id}`}>
                <div className='flex justify-center items-center hover:bg-orange-400 text-orange-400 hover:text-gray-800  px-4 py-2 ml-2 lg:px-6 lg:py-2 lg:ml-4 border border-orange-400 rounded-lg'>
                  <HiPencil />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      <NavbarAll />
      <h1 className="text-4xl font-thin text-center p-6">
        OFFER DETAILS
      </h1>
      <div className="flex justify-end items-end mt-4">
        <AddOffers />
      </div>
      <div className="overflow-x-auto drop-shadow-lg rounded-lg border-b-2">
        {offers && offers.map((offer, index) => (
          <OfferAccordion
            key={offer._id}
            offer={offer}
            isOpen={expandedOffer === index}
            toggleAccordion={() => toggleOffer(index)}
          />
        ))}
      </div>
    </div>
  );
}
