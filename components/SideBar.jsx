"use client";
import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import{
  MdHomeFilled,
  MdDehaze,
  MdDashboard,
  MdGroups2
} from 'react-icons/md'

export default function SideBar() {
const mainLinks  =[
    {
        icon:<MdHomeFilled/>,
        name:"Home"
    },
    {
        icon:<MdGroups2/>,
        name:"customers"
    },
    {
        name:"offers"
    },
]



  return (
    <div className='w-2/12   pr-5 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-1 bg-orange-400'>
            {mainLinks.map(
                ({icon ,name})=>{
                    return(
                        <li key={name} className={`pl-6 py-3 hover:bg-gray-500 ${name === "Home"?"bg-gray-500":" "}
                        `}>
                            <a href='#'>
                                {icon}
                            </a>
                            <span>{name}</span>
                        </li>
                    )
                   
                }
            )}
        </ul>
    </div>
  )
}
