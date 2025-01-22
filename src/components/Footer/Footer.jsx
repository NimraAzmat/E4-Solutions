import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#000000]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-30 md:gap-4">
          {/* first section */}
          <div className="space-y-5 max-w-[400px]">
            <h1 className="text-4xl font-medium text-light">E4 Solutions</h1>
            <p className="text-light">
              At E4 Solutions, we create modern, professional websites and offer
              expert consultancy in construction, HVAC, electrification,
              elevators/escalators, construction supervision, and IT services,
              ensuring high-quality outcomes for our clients.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
              <h1 className="text-lg font-bold text-light">Contact Us</h1>
              <p className="text-navbg">-----------------------------------</p>
              <div className="text-light">
                <ul className="space-y-2 text-base">
                  <li className="cursor-pointer hover:font-medium duration-200">
                    (555) 555 - 1234
                  </li>
                  <li className="cursor-pointer hover:font-medium duration-200">
                    info@e4solutions.com
                  </li>
                  <li className="cursor-pointer hover:font-medium duration-200">
                    456 Construction Ave, Boulder, CO
                  </li>
                  <li className="cursor-pointer hover:font-medium duration-200">
                    Available Daily: 7am - 10pm
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-light">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* third section */}
          {/* <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-light"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div> */}
          {/* social icons */}
          {/* <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/the.coding.journey/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://thecodingjourney.com/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/@TheCodingJourney">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
