"use client"
import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import Link from 'next/link';
import AddCustomers from './AddCustomers';
import EditBtn from './EditBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import Chevron icons from Font Awesome

const getCustomers = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/customers', {
            cache: "no-store",
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
        const { customers } = await getCustomers();
        setCustomers(customers);
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
        <div className="p-4 m-4 w-full">
            <h1 className='text-4xl font-thin text-center mb-8'>
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
                            <th className="px-2 py-2 border rounded-md border-orange-400 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='border border-separate'>
                        {customers && customers.map((t, index) => (
                            <React.Fragment key={t._id}>
                                <tr className="cursor-pointer">
                                    <td className='border-r p-1'>{t.name}</td>
                                    <td className='border-r p-1'>{t.phonenumber}</td>
                                    <td className='border-r p-1'>{t.date}</td>
                                    <td className='flex justify-center items-center px-2 py-2'>
                                        <DeleteBtn id={customer._id} />
                                        <Link href={`/editCustomers/${t._id}`}><EditBtn /></Link>
                                        <button onClick={() => toggleCustomer(index)} className="focus:outline-none ml-6">
                                            {expandedCustomer === index ? (
                                                <FontAwesomeIcon icon={faChevronDown} className="text-orange-200" />
                                            ) : (
                                                <FontAwesomeIcon icon={faChevronUp} className="text-gray-100" />
                                            )}
                                        </button>
                                    </td>
                                </tr>
                                {expandedCustomer === index && (
                                    <tr>
                                        <td colSpan="4" className="p-2 border  border-orange-400 border-separate rounded-md bg-orange-200 ">
                                            <div className="flex justify-around ml-6 mr-6 text-gray-800 ">
                                                <div ><strong className='text-gray-800'>Services:</strong> {t.services}</div>
                                                <div><strong className='text-gray-800'>Attendant:</strong> {t.attendant}</div>
                                            </div>
                                            {/* Add more details here if needed */}
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
