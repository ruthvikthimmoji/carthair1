import React from 'react'

const AboutUsPage = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className=' flex flex-col justify-start items-start border p-60 mb-6 lg:mb-0'>
                <h1 className='text-4xl font-bold p-2'>
                    ABOUT US</h1>
                <p className='font-thin p-2'>
                    Our mission is to streamline your salon operations and help you deliver exceptional customer service.</p>
                <div className=' p-2 '>
                    <button className='border rounded-md px-6 py-3'>
                        call us</button>
                </div>
            </div>


            <div className='flex flex-col justify-between items-center'>
                <div className='p-40 flex-col justify-center items-center'>
                    <h1 className='text-3xl p-2 flex justify-center  '>
                        Our Services</h1>
                    <p className='font-thin flex-col justify-center'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                            Lorem Ipsum has been the industrys <br />
                        standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and <br />
                        scrambled it to make a type specimen book.</p>
                </div>
                <div className=' border p-40'>
                    
            </div>

            <div className='flex flex-col lg:flex-row justify-between m-20'>
                <div className='border p-20'>
                    <h1>Our Vission</h1>
                </div>
                <div className='border p-20 ml-20'>
                    <h1>Our Mission</h1>
                </div>

            </div>


            <div className='flex flex-col justify-center items-center p-5'>
                <h1 className='font-bold p-4'>
                    Why Choose Us?</h1>
                <p className='font-thin'>
                    Carthair stands out because of our user-friendly interface, robust feature set, and dedicated support team.<br/>
                We understand the unique challenges of running a salon and are committed to providing solutions that work seamlessly.</p>
            </div>
            


        <footer className=" flex flex-col justify-center items-center p-4">
          <div className="text-center mt-4 font-extralight" >
            <span>&copy; SalonApp. All rights reserved.</span>
          </div>
        </footer>
        </div>
        </div>
    )
}

export default AboutUsPage