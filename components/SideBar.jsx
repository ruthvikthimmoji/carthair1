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
        <div className='w-2/12 pr-5 overflow-auto  pb-8 min-h-screen'>
            <ul className='flex flex-col p-4 border-b-2 rounded-t-lg text-2xl bg-orange-400 pb-16'>
                {mainLinks.map(
                    ({ icon, name }) => {
                        return (
                            <li key={name} className={`pl-6 py-3 p-4 rounded-lg hover:bg-gray-500 ${name === "Home" ? "bg-gray-500" : " "}
                        `}>
                                <a href='#' className='flex items-center  gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>

                                </a>
                            </li>

                        )
                    }
                )}
            </ul>

            <ul className='flex flex-col text-2xl p-4 rounded-b-lg  bg-orange-400 '>
                {otherLinks.map(
                    ({ icon, name }) => {
                        return (
                            <li key={name} className={`pl-6 py-3 p-4 rounded-lg hover:bg-gray-500 ${name === "Home" ? "bg-gray-500" : " "}
                        `}>
                                <a href='#' className='flex  items-center gap-5'>
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>

                                </a>
                            </li>

                        )

                    }
                )}
            </ul>
        </div>
    )
}
