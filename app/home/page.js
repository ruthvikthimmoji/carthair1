import React from 'react'
import NavBar from '../../components/NavBar'

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div>
            </div>
            <div>
                <div className='ml-60 mr-10'>
                    <main className=' flex flex-row justify-between items-center p-36' >
                        <div className=' border bg-orange-400 p-36'>
                            <h1>
                                customers
                            </h1>
                        </div>
                        |||||
                        <div className='border p-36'>
                            <h1>
                                Offers
                            </h1>
                        </div>

                    </main>
                </div>

                <footer className=" flex flex-col justify-center items-center">
                    <div className="text-center mt-4 font-extralight" >
                        <span>&copy; SalonApp. All rights reserved.</span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default HomePage