import React from 'react'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import AddCustomers from './AddCustomers'
import EditBtn from './EditBtn'
import AddOffers from './AddOffers'




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
            <h1 className='text-4xl font-thin flex flex-col justify-center items-center p-4 m-4 w-screen'>
                OFFER DETAILS
            </h1>
            <div>
                <div className="flex justify-between  backdrop-blur-sm bg-orange-100/10  p-4" >
                    <table className="border rounded-md border-orange-400 border-separate w-screen my-6 table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Offer</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">Phone Number</th>
                                <th className="px-4 py-2 border rounded-md border-orange-400 text-left">status</th>

                            </tr>
                        </thead>
                        <tbody className='border border-separate'>
                            {customers.map(t => (
                                <tr key={t._id}>
                                    <td className='border-r p-2 '>{t.Offer}</td>
                                    <td className='border-r p-2'>{t.phonenumber}</td>
                                    <td className='p-2'>{t.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end p-4'>
                    <AddOffers />
                </div>

            </div>





        </div>
    )
}

