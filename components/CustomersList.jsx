"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AddCustomers from './AddCustomers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import Chevron icons from Font Awesome
import NavbarAll from './NavbarAll';
import { HiTrash, HiPencil } from 'react-icons/hi';

import * as Realm from "realm-web";


export default function CustomersList() {
    const [customers, setCustomers] = useState([]);
    const [expandedCustomer, setExpandedCustomer] = useState(null);

    const fetchCustomers = async () => {
        const { documents } = await getCustomers();
        setCustomers(documents);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const toggleCustomer = (index) => {
        if (expandedCustomer === index) {
            expandedCustomer(null);
        } else {
            setExpandedCustomer(index);
        }
    };

    const getCustomers = async () => {
        try {
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
                    "collection": "customers",
                    "database": "customersDB",
                    "dataSource": "Cluster0",
                    "projection": {}
                })
            });
            if (!res.ok) {
                throw new Error("Failed to fetch Offers");
            }
            return res.json();
        } catch (error) {
            console.error("Error in Loading", error);
            return { customers: [] };
        }
    };

    async function loginEmailPassword(email, password) {
        const app = new Realm.App({ id: 'data-gacfoem' });
        const credentials = Realm.Credentials.emailPassword(email, password);
        const user = await app.logIn(credentials);
        console.assert(user.id === app.currentUser.id);
        return user;
    }

    const removeCustomers = async (id) => {
        try {
            const user = await loginEmailPassword('ruthvik@gmail.com', 'OxfMiQLGIXyKATl');
            const res = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-gacfoem/endpoint/data/v1/action/deleteOne', {
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
                fetchCustomers()
            } else {
                throw new Error("Failed to fetch Offers");
            }
        } catch (error) {
            console.error("Error in Deleting", error);
        }
    }
    return (
        <div className="w-full">
            <NavbarAll />
            <h1 className='text-4xl font-thin text-center p-6'>
                CUSTOMER DETAILS
            </h1>
            <div className='flex justify-end items-end mt-4'>
                <AddCustomers />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border rounded-lg border-separate ">
                    <thead>
                        <tr>
                            <th className="px-2 py-2 border rounded-md border-orange-400 text-left">Name</th>
                            <th className="px-2 py-2 border rounded-md border-orange-400 text-left">Phone Number</th>
                            <th className="px-2 py-2 border rounded-md border-orange-400 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody className='border border-separate'>
                        {customers && customers.map((customer, index) => (
                            <React.Fragment key={customer._id}>
                                <tr className="cursor-pointer" onClick={() => toggleCustomer(index)}>
                                    <td className='border-r p-1'>{customer.name}</td>
                                    <td className='border-r p-1'>{customer.phonenumber}</td>
                                    <td className='border-r p-1 flex flex-row justify-between'>
                                        <span>
                                            {customer.date}
                                        </span>
                                        <button
                                            className='px-2 py-1'>
                                            {expandedCustomer === index ? (
                                                <FontAwesomeIcon icon={faChevronUp} className="text-orange-200" />
                                            ) : (
                                                <FontAwesomeIcon icon={faChevronDown} className="text-gray-100" />
                                            )}
                                        </button>
                                    </td>
                                </tr>
                                {expandedCustomer === index && (
                                    <tr>
                                        <td colSpan="4" className="p-2 border  border-orange-400 border-separate rounded-md bg-orange-200 ">
                                            <div className="flex justify-around mx-6 text-gray-800 ">
                                                <div><strong className='text-gray-800'>Services:</strong> {customer.services}</div>
                                                <div><strong className='text-gray-800'>Attendant:</strong> {customer.attendant}</div>
                                                <div className='flex justify-center items-center '>
                                                    <button
                                                        onClick={() => removeCustomers(customer._id)}
                                                        className='flex justify-center items-center hover:bg-orange-400 text-orange-400 hover:text-gray-800 h px-4 py-2 mr-2 lg:px-6 lg:py-2 lg:mr-4 border border-orange-400 rounded-lg'>
                                                        <HiTrash />
                                                    </button>
                                                    <Link href={`/editCustomers/${customer._id}`}>
                                                        <div className='flex justify-center items-center hover:bg-orange-400 text-orange-400 hover:text-gray-800  px-4 py-2 ml-2 lg:px-6 lg:py-2 lg:ml-4 border border-orange-400 rounded-lg'>
                                                            <HiPencil />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
