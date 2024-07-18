"use client";
import React from "react";
import AddOffers from "./AddOffers";
import NavbarAll from "./NavbarAll";
import * as Realm from "realm-web";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DeleteBtn from "./DeleteBtn2";
import EditBtn from "./EditBtn";

const getOffers = async () => {
  try {
    async function loginEmailPassword(email, password) {
      const app = new Realm.App({ id: 'data-gacfoem' });

      // Create an email/password credential
      const credentials = Realm.Credentials.emailPassword(email, password);
      // Authenticate the user
      const user = await app.logIn(credentials);
      // 'App.currentUser' updates to match the logged in user
      console.assert(user.id === app.currentUser.id);
      return user;
    }

    const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
    const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action/find', {
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
        "projection": {}
      })
    });
    if(!res.ok){
      throw new Error("Failed to fetch Offers");
    }
    return res.json();
  }catch (error) {
    console.error("Error in Loading",error);
    return{offers:[]};
  }
};
export default function OffrsList(){
  // const [expandedOffer,setExpandedOffer] = useState(null);
  const [offers,setoffers] = useState([]);

  const fetchOffers =async() =>{
    const {documents} =await getOffers();
    setoffers(documents);
  };

  useEffect(()=>{
    fetchOffers();
  }, []);
    

  // const toggleOffer =(index) =>{
  //   if(expandedOffer === index){
  //     setExpandedOffer(null);
  //   }else{
  //     setExpandedOffer(index);
  //   }
  // };
  return(
    <div className="w-full">
      <NavbarAll/>
      <h1 className="text-4xl font-thin text-center p-6">
        OFFER DEATILS
      </h1>
      <div className="flex justify-end items-end mt-4">
        <AddOffers/>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border rounded-lg border-separate">
          <thead>
            <tr>
              <th className="px-2 py-2 border rounded-md border-orange-400 text-left">Title</th>
              <th className="px-2 py-2 border rounded-md border-orange-400 text-left">Description</th>
              <th className="px-2 py-2 border rounded-md border-orange-400 text-left">Actions</th>

            </tr>
          </thead>
          <tbody className="border border-separate">
            {offers && offers.map((f,index)=>(
              <React.Fragment key = {f.id}>
                <tr>
                  <td className="border-r p-1">{f.title}</td>
                  <td className="border-r p-1">{f.description}</td>
                  <td className="border-r p-1">
                  <div className="flex justify-around mx-6 text-gray-800 ">
                    <DeleteBtn id = {f._id} />
                    <Link href={`/editOffers/${f._id}`}>
                    <EditBtn/>
                    </Link>
                  </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}