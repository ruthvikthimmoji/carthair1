"use client";
import React from 'react';
import {
    MdHomeFilled,
    MdGroups2,
    MdOutlineConnectWithoutContact,
    MdOutlineLogout,
    MdSettings
} from 'react-icons/md';
import { CiDiscount1 } from "react-icons/ci";
import Link from 'next/link';

export default function SideBar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled />,
            name: "Home",
            path: "/"
        },
        {
            icon: <MdGroups2 />,
            name: "Customers",
            path: "/pages/customers"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            path: "/pages/offers"  // Ensure the path is correctly defined
        },
        {
            icon: <MdOutlineConnectWithoutContact />,
            name: "Contact Us",
            path: "/pages/contactus"
        }
    ];

    const otherLinks = [
        {
            icon: <MdOutlineLogout />,
            name: "Logout",
            path: "/"  // Corrected path
        },
        {
            icon: <MdSettings />,
            name: "Settings",
            path: "/settings"  // Added missing path
        }
    ];

    return (
        <div className='flex flex-col md:flex-row pt-10 h-full'>
            <div className='w-full md:w-1/4 lg:w-1/5  md:rounded-b-lg md:rounded-t-lg backdrop-blur-lg bg-orange-200/30'>
                <ul className='flex flex-col p-4 border-b-2 rounded-t-lg md:rounded-t-none md:rounded-b-lg text-2xl  md:border-b-2 md:border-r-0 border-gray-800'>
                    {mainLinks.map(({ icon, name, path }) => (
                        <li key={name} className={`pl-6 py-3 p-4 rounded-lg text-orange-400 hover:text-gray-800 hover:bg-orange-200`}>
                            <Link href={path}>
                                <div className='flex items-center gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='flex flex-col text-2xl p-4 rounded-b-lg md:rounded-b-lg md:rounded-t-lg'>
                    {otherLinks.map(({ icon, name, path }) => (
                        <li key={name} className={`pl-6 py-3 p-4 rounded-lg text-orange-400 hover:text-gray-800 hover:bg-orange-200`}>
                            <Link href={path}>
                                <div className='flex items-center gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex-1 p-4'>
                {/* Main content goes here */}
            </div>
        </div>
    );
}
