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
            path: "/pages/offers"
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
            path: "/"
        },
        {
            icon: <MdSettings />,
            name: "Settings",
            path: "/"
        }
    ];

    return (
        <div className='flex flex-col lg:flex-row h-full'>
            <div className='w-full lg:w-1/5 md:rounded-lg backdrop-blur-lg bg-orange-200/30'>
                <ul className='flex flex-col lg:flex-col p-4 border-b-2 lg:border-b-2 lg:border-r-0 border-gray-800 text-2xl'>
                    {mainLinks.map(({ icon, name, path }) => (
                        <li key={name} className={`pl-6 py-3 mb-2 rounded-lg text-orange-400 hover:text-gray-800 hover:bg-orange-200 ${name === "Home" ? "bg-orange-200" : ""}`}>
                            <Link href={path}>
                                <div className='flex items-center gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='flex flex-col lg:flex-col text-2xl p-4'>
                    {otherLinks.map(({ icon, name, path }) => (
                        <li key={name} className={`pl-6 py-3 mb-2 rounded-lg text-orange-400 hover:text-gray-800 hover:bg-orange-200`}>
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
