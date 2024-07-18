"use client"
import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import Link from 'next/link';
import AddCustomers from './AddCustomers';
import EditBtn from './EditBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import Chevron icons from Font Awesome
import NavbarAll from './NavbarAll';

import * as Realm from "realm-web";

const getCustomers = async () => {
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
                "collection": "customers",
                "database": "customersDB",
                "dataSource": "Cluster0",
                "projection": {}
            })
        });

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }

        return res.json();
    } catch (error) {
        console.error("Error in loading", error);
        return { customers: [] };
    }
};

export default function CustomersList() {
    const [expandedCustomer, setExpandedCustomer] = useState(null);
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        const { documents } = await getCustomers();
        setCustomers(documents);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const toggleCustomer = (index) => {
        if (expandedCustomer === index) {
            setExpandedCustomer(null);
        } else {
            setExpandedCustomer(index);
        }
    };

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
                        {customers && customers.map((t, index) => (
                            <React.Fragment key={t._id}>
                                <tr className="cursor-pointer" onClick={() => toggleCustomer(index)}>
                                    <td className='border-r p-1'>{t.name}</td>
                                    <td className='border-r p-1'>{t.phonenumber}</td>
                                    <td className='border-r p-1 flex flex-row justify-between'>
                                        <span>
                                            {t.date}
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
                                                <div><strong className='text-gray-800'>Services:</strong> {t.services}</div>
                                                <div><strong className='text-gray-800'>Attendant:</strong> {t.attendant}</div>
                                                <div className='flex justify-center items-center '>
                                                    <DeleteBtn id={t._id} />
                                                    <Link href={`/editCustomers/${t._id}`}>
                                                        <EditBtn />
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
