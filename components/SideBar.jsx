"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiLogout, HiUserCircle } from 'react-icons/hi';
import { GoHome } from 'react-icons/go';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlinePhone } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { LiaCogSolid } from "react-icons/lia";
import { RiCoupon2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";





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
                <aside className="flex  flex-col items-start  min-h-screen px-4 py-2 w-36  mt-40">
                    <ul className="flex-col space-y-2 backdrop-blur-sm bg-orange-400/10 shadow-lg hover:shadow-orange-400 rounded-lg p-6">
                        <Link href='/home'>
                            <li className="p-6 text-2xl hover:scale-150 ">
                                <GoHome/>  </li>
                        </Link>

                        <li className="p-6 space-y-2 mt-2 text-2xl hover:scale-150" onClick={toggleDashboardDropdown} >
                            <LuLayoutDashboard /></li>
                        {isDashboardOpen && (
                            <ul className="border border-orange-400 bg-orange-400 text-gray-800 rounded-lg shadow-md shadow-orange-400">
                                <Link href="./pages/customers">
                                    <li className='p-6 space-y-2 mt-2 text-2xl' >
                                        <FaUsers />
                                    </li>
                                </Link>
                                <Link href="./pages/offers">
                                    <li className='p-6 space-y-2 mt-2 text-2xl'>
                                        <RiCoupon2Line /></li>
                                </Link>
                            </ul>
                        )}

                        <Link href="./sideBar/contactus">
                            <li className="p-6 text-2xl hover:scale-150">
                                <MdOutlinePhone /></li>
                        </Link>

                        <Link href="./sideBar/aboutUs">
                            <li className="p-6 text-2xl hover:scale-150">
                                <FcAbout /></li>
                        </Link>

                        <li className="p-6 text-2xl hover:scale-150" onClick={toggleSettingDropdown}>
                            <LiaCogSolid/></li>
                        {isSettingsOpen && (
                            <ul className="border border-orange-400 bg-orange-400 text-gray-800 rounded-lg shadow-md shadow-orange-400" >
                                <Link href="./profile">
                                    <li className='p-6 space-y-2 mt-2 text-2xl' >
                                        <CgProfile />
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