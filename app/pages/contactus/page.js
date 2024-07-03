import React from 'react';
import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const ContactPage = () => {
  return (
    <div>
      <header>

      </header>

      <main className="flex flex-col lg:flex-row justify-center items-center backdrop-blur-sm bg-white/10 p-20 lg:p-60 bg-center">
        <h1 className="text-6xl flex-col text-center ">
          CONTACT US
        </h1>
        <p className="text-center flex-col p-4">
          Need an Expert? Feel free to leave your contact information and we will be in touch shortly.
        </p>
      </main>

      <section className="flex flex-col lg:flex-row justify-between p-6 lg:p-12 mt-16">
        <div className="flex flex-col justify-center items-center p-6">
          <FaHome className="text-5xl" />
          <h2 className="p-4 text-xl font-bold">
            Visit Us
          </h2>
          <p className="text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="#" className="p-2">
            India
          </a>
        </div>

        <div className="flex flex-col justify-center items-center p-6">
          <FaPhoneAlt className="text-5xl" />
          <h2 className="p-4 text-xl font-bold">
            Call Us
          </h2>
          <p className="text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="tel:+916361906550" className="p-2">
            +91 6361906550
          </a>
        </div>

        <div className="flex flex-col justify-center items-center p-6">
          <HiMail className="text-5xl" />
          <h2 className="p-4 text-xl font-bold">
            Email Us
          </h2>
          <p className="text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="mailto:noreply@email.com" className="p-2">
            noreply@email.com
          </a>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1013.0170947717461!2d73.91207928151448!3d18.57347435723205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718640732165!5m2!1sen!2sin"
          width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className="mt-8"
        ></iframe>
      </section>

      <footer className="flex flex-col justify-center items-center p-4">
        <div className="text-center mt-4 font-extralight">
          <span>&copy; SalonApp. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
