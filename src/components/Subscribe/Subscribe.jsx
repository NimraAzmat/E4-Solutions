import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.jpg";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  const handleGetQuote = () => {
    const phoneNumber = "923225269194";
    const message = encodeURIComponent(
      "Hello, I am interested in your services. Please provide a quote."
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto text-navbg">
            <h1 className="text-4xl font-bold !leading-snug">
              50+ Projects
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima
            </p>
            <button
              onClick={handleGetQuote}
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Get a Quote
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
