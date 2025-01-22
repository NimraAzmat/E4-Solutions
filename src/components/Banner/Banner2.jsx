import React, { useState } from "react";
import { motion } from "framer-motion";

const Banner2 = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const text = encodeURIComponent(
      `Hello E4 Solutions PVT Ltd. I am interested in your services. Here's my project description.${message}`
    );
    const whatsappLink = `https://wa.me/923225269194?text=${text}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 overflow-hidden min-h-[800px]">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[600px]">
            <h1 className="text-5xl font-bold !leading-snug">
              Forge a Connection with E4 Solutions PVT Ltd.
            </h1>
            <p className="text-dark2 text-lg">
              Unlock the potential of your construction projects with our
              dedicated team. We are eager to understand your unique
              requirements and provide expert guidance in HVAC systems,
              electrification, elevators, construction supervision, and IT
              services.
            </p>
            <span className="text-primary font-medium text-lg">
              Let’s work together to achieve exceptional results.
            </span>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.542613874204!2d73.05151995!3d33.59529685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94834d87f5a3%3A0x506e17bedd22f2e7!2sSaddar%2C%20Rawalpindi%2C%20Punjab%2046000!5e0!3m2!1sen!2s!4v1737482390882!5m2!1sen!2s"
              width="600"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="!mt-8"
            ></iframe>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center h-[550px] items-center">
          {/* form */}
          <div className="bg-navbg p-10  rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <form>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded-md bg-white w-[500px] py-4 focus:ring-0 focus:outline-none placeholder:text-gray"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-md bg-white w-[500px] py-4 focus:ring-0 focus:outline-none placeholder:text-gray"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 rounded-md bg-white w-[500px] py-4 focus:ring-0 focus:outline-none placeholder:text-gray"
                />
                <textarea
                  placeholder="Describe your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-3 rounded-md bg-white w-[500px] py-4 focus:ring-0 focus:outline-none placeholder:text-gray"
                />
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="bg-secondary text-white font-semibold py-2 px-4 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
            <p className="text-white mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=00923225269194&text=Hello%20E4%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              ></a>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner2;
