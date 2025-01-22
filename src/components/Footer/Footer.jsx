import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const socialMediaLinks = [
    { icon: FaFacebook, className: "text-navbg hover:text-white" },
    { icon: TbWorldWww, className: "text-navbg hover:text-white" },
    { icon: FaInstagram, className: "text-navbg hover:text-white" },
  ];

  const contactInfo = [
    { icon: FaPhoneAlt, text: "(555) 555 - 1234" },
    { icon: IoMdMail, text: "info@e4solutions.com" },
    { icon: FaLocationDot, text: "456 Construction Ave, Boulder, CO" },
    { icon: FaClock, text: "Available Daily: 7am - 10pm" },
  ];

  return (
    <footer className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 py-24 xl:px-12 2xl:px-36"
      >
        <div className="grid grid-cols-1 pt-4 pl-8 md:grid-cols-2 gap-8 lg:grid-cols-2 lg:space-x-32">
          {/* First Section */}
          <div className="mb-6 max-w-[470px]">
            <a href="/" className="mb-8 block text-2xl tracking-wider text-white">
              E4 Solutions PVT Ltd.
            </a>
            <p className="text-left font-extralight tracking-wider text-white leading-6">
              At E4 Solutions, we create modern, professional websites and offer
              expert consultancy in construction, HVAC, electrification,
              elevators/escalators, construction supervision, and IT services,
              ensuring high-quality outcomes for our clients.
            </p>
            <div className="my-8 flex flex-row justify-center text-gray-400 md:justify-start">
              {socialMediaLinks.map((link, index) => (
                <div key={index} className="bg-white rounded-full p-2 mr-3">
                  <link.icon className={link.className} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Section */}
          <div className="space-y-4 text-white mb-4">
            <div className="mb-6 border-b-2 border-navbg pb-4 text-xl tracking-wide text-white">
              Contact Us
            </div>
            {contactInfo.map((info, index) => (
              <div key={index} className="mb-1 flex items-center flex-row font-extralight tracking-wider text-white">
                <info.icon className="text-navbg mr-2" />
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pl-8">
          <hr className="border-1 border-gray-700 w-full mt-8" />
          <div className="mt-5 text-gray-700 text-xs">
            &copy; 2025 E4 Solutions PVT Ltd. All Rights Reserved
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;