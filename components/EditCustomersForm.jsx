import React from 'react'
import NavBar1 from './NavBar1'

const EditCustomersForm = () => {
    return (
        <div>
            <NavBar1 />
            <div>
                <h1 className='flex justify-center glow-text text-4xl font-thin p-10'>EditCustomersForm</h1>
                <div className=' flex justify-center items-center p-10'>
                    <form className=' flex flex-col justify-center rounded-lg px-4 py-2 bg-orange-200'>
                        <div className='flex flex-col justify-center shadow-lg shadow-black rounded-lg px-4 py-2 m-4 '>
                            <label className='p-2 text-gray-800' > Customer Name : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent' type='text' />
                            <label className='p-2  text-gray-800'> Phone Number : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent'
                                type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                            <label className='p-2  text-gray-800'> Date :</label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent'
                                type='Date' placeholder='dd/mm/yyyy' />
                            <label className='p-2 text-gray-800'> Services :</label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent'
                                type='text' />
                            <label className='p-2  text-gray-800'> Attendant : </label>
                            <input className='border border-gray-800 text-gray-800 rounded-lg px-6 py-2 m-2 bg-transparent'
                                type='text' />
                            <button className="mt-6 mb-4 px-4 py-2 rounded-md bg-orange-500 rounded-badge">
                                Update Customers </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCustomersForm