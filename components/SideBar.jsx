"use client";
import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {
    MdHomeFilled,
    MdDehaze,
    MdDashboard,
    MdGroups2,
    MdOutlineConnectWithoutContact,
    MdOutlineLogout,
    MdSettings
} from 'react-icons/md'
import { CiDiscount1 } from "react-icons/ci";


export default function SideBar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled />,
            name: "Home"
        },
        {
            icon: <MdGroups2 />,
            name: "Customers"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers"
        },
        {
            icon: <MdOutlineConnectWithoutContact />,
            name: "contactus"
        }];

    const otherLinks = [
        {
            icon: <MdOutlineLogout />,
            name: "Logout"
        },
        {
            icon: <MdSettings />,
            name: "settings"
        }
    ]



    return (
            <div className='flex flex-col md:flex-row h-full'>
                <div className='w-full mt-4 md:w-1/4 lg:w-1/5 bg-orange-400 md:rounded-lg'>
                    <ul className='flex flex-col p-4 border-b-2 rounded-t-lg md:rounded-t-none md:rounded-b-lg text-2xl bg-orange-400 md:border-r-0 md:border-b-2'>
                        {mainLinks.map(({ icon, name }) => (
                            <li key={name} className={`pl-6 py-3 p-4 rounded-lg hover:bg-gray-500 ${name === "Home" ? "bg-gray-500" : ""}`}>
                                <a href='#' className='flex items-center gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-col text-2xl p-4 rounded-b-lg md:rounded-b-none md:rounded-l-lg bg-orange-400'>
                        {otherLinks.map(({ icon, name }) => (
                            <li key={name} className={`pl-6 py-3 p-4 rounded-lg hover:bg-gray-500 ${name === "Home" ? "bg-gray-500" : ""}`}>
                                <a href='#' className='flex items-center gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </a>
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