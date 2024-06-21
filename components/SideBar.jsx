"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaCog, FaCoins, FaHome, FaInfo, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { HiLogout, HiUserCircle } from 'react-icons/hi';

const SideBar = () => {

    const [isDashboardOpen, setIsDashboardOpen] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const toggleDashboardDropdown = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    const toggleSettingDropdown = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };





    return (
        <div>
            <div className=''>
                <aside className="flex  flex-col absolute items-start  min-h-screen px-4 py-2 w-60  mt-40">
                    <ul className="flex-col space-y-2 backdrop-blur-sm bg-white/10  shadow-lg hover:shadow-orange-400 rounded-lg p-6">
                        <Link href='/home'>
                            <li className="p-6 text-2xl hover:scale-150 ">
                                <FaHome /></li>
                        </Link>

                        <li className="p-6 space-y-2 mt-2 text-2xl hover:scale-150" onClick={toggleDashboardDropdown} >
                            <FaBars /></li>
                        {isDashboardOpen && (
                            <ul className="border border-orange-400 bg-orange-400 text-gray-800 rounded-lg shadow-md shadow-orange-400">
                                <Link href="./pages/customers">
                                    <li className='p-6 space-y-2 mt-2 text-2xl' >
                                        <FaUser />
                                    </li>
                                </Link>
                                <Link href="./pages/offers">
                                    <li className='p-6 space-y-2 mt-2 text-2xl'>
                                        <FaCoins /></li>
                                </Link>
                            </ul>
                        )}

                        <Link href="./sideBar/contactus">
                            <li className="p-6 text-2xl hover:scale-150">
                                <FaPhoneAlt /></li>
                        </Link>

                        <Link href="./aboutUs">
                            <li className="p-6 text-2xl hover:scale-150">
                                <FaInfo /></li>
                        </Link>

                        <li className="p-6 text-2xl hover:scale-150" onClick={toggleSettingDropdown}>
                            <FaCog /></li>
                        {isSettingsOpen && (
                            <ul className="border border-orange-400 bg-orange-400 text-gray-800 rounded-lg shadow-md shadow-orange-400" >
                                <Link href="./profile">
                                    <li className='p-6 space-y-2 mt-2 text-2xl' >
                                        <HiUserCircle />
                                    </li>
                                </Link>
                                <Link href="./">
                                    <li className='p-6 space-y-2 mt-2 text-2xl'>
                                        <HiLogout /></li>
                                </Link>
                            </ul>
                        )}
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default SideBar