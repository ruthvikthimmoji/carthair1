import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Home() {
  return (
    <div>
      <div>
        <Navbar2 />
      </div>
      <div className="flex flex-row justify-between border-b-2 border-orange-200 items-center p-6 mr-16 ml-24">

        <div className=" backdrop:blur bg-orange-200/40 p-24 border rounded-lg">

          <h1 className="text-4xl  font-bold">
            Manage Your Salon </h1>
          <p className="text-2xl  font-thin">
            Get the best for your salon</p>
          <button className="border  text-xl  text-gray-800 bg-orange-400 rounded-lg px-8 py-3 mt-6">
            Get Started
          </button>
        </div>
        <div className=" flex-row justify-between border rounded-lg  backdrop:blur-lg bg-orange-200/20 p-4">
          <Image
            src="/img1.jpg"
            alt="Example Image"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className=" border-b-2 border-orange-200 p-6 mt-4 ml-24 mr-16">
      <div>
        <h1 className=' flex justify-center text-4xl p-4'>
          About Us</h1>
          <p className='flex justify-center font-thin  p-4'>
          Our mission is to streamline your salon operations and help you deliver exceptional customer service.</p>
      </div>
      
      </div>
      
      <footer className=" rounded-full backdrop:blur bg-gray-900/60 m-9">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-col p-4">
            <span>Contact us:</span>
            <span>Email: salonapp@exc.com</span>
            <span>Phone: +1 123-456-7890</span>
          </div>

          <div className="flex flex-col p-4">
            <span></span>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex flex-col p-4">
            <span>Follow us:</span>
            <a href="#"><i className="fab fa-facebook"></i><FaInstagram/> Instagram</a>
            <a href="#"><i className="fab fa-twitter"></i><FaSquareXTwitter/> Twitter</a>
          </div>

          <div className="text-center mt-4">
            <span>&copy; CartHair. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
