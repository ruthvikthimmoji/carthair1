import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar2 />
      </div>
      <div className="flex flex-col lg:flex-row justify-between border-b-2 border-orange-200 items-center p-6 lg:mr-16 lg:ml-24">
        <div className="backdrop:blur bg-orange-200/40 p-8 lg:p-24 border rounded-lg mb-6 lg:mb-0">
          <h1 className="text-2xl lg:text-4xl font-bold">Manage Your Salon</h1>
          <p className="text-lg lg:text-2xl font-thin mt-4">Get the best for your salon</p>
          <button className="text-lg lg:text-xl hover:translate-x-1 lg:hover:translate-x-11  text-gray-800 bg-orange-400 rounded-lg px-6 lg:px-8 py-2 lg:py-3 mt-6">
            <a href="/login">Get Started</a>
          </button>
        </div>
        <div className="flex justify-center border rounded-lg backdrop:blur-lg bg-orange-200/20 p-4">
          <Image
            src="/img1.jpg"
            alt="Example Image"
            width={600}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="border-b-2 border-orange-200 p-6 mt-4 lg:ml-24 lg:mr-16">
        <div>
          <h1 className="flex justify-center text-2xl lg:text-4xl p-4">About Us</h1>
          <p className="flex justify-center font-thin text-center p-4">
            Our mission is to streamline your salon operations and help you deliver exceptional customer service.
          </p>
        </div>
      </div>
      <footer className="rounded-full backdrop:blur bg-gray-900/60 m-4 lg:m-9">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
          <div className="flex flex-col p-4">
            <span>Contact us:</span>
            <span>Email: salonapp@exc.com</span>
            <span>Phone: +1 123-456-7890</span>
          </div>
          <div className="flex flex-col p-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex flex-col p-4">
            <span>Follow us:</span>
            <a href="#"><FaInstagram className="inline mr-2" /> Instagram</a>
            <a href="#"><FaSquareXTwitter className="inline mr-2" /> Twitter</a>
          </div>
          <div className="text-center mt-4 w-full">
            <span>&copy; CartHair. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
