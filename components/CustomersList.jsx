import React from 'react'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import AddCustomers from './AddCustomers'
import EditBtn from './EditBtn'




const getCustomers = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/customers', {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    } catch (error) {
        console.log("Error in loading", error)

    }
}


export default async function CustomersList() {

   const { customers } = await getCustomers();


    return (
        <div>
            <h1 className='text-4xl font-thin flex flex-col justify-center items-center p-4 m-4'>
                Customer Details
            </h1>
            <div>
                <div className="flex justify-between  p-4" >
                    <table className="border rounded-md border-orange-400 border-separate  w-full my-6 mx-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Name</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Phone Number</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Date</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Services</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Attendant</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='border border-separate'>
                            {customers.map(t => (
                                <tr key={t._id}>
                                    <td className='border-r p-2 '>{t.name}</td>
                                    <td className='border-r p-2'>{t.phonenumber}</td>
                                    <td className='border-r p-2'>{t.date}</td>
                                    <td className='border-r p-2'>{t.services}</td>
                                    <td className='border-r p-2'>{t.attendant}</td>
                                    <td className='flex  flex-row justify-center px-2 py-2'>
                                        <DeleteBtn id={t._id} />
                                        <Link href={`/editCustomers/${t._id}`}><EditBtn /></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end p-4'>
                    <AddCustomers />
                </div>

            </div>





        </div>
    )
}

