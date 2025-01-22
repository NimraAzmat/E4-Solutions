import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Titlebar from "../Titlebar/Titlebar";
import { IoIosArrowRoundForward } from "react-icons/io";
// import HeroPng from "../../assets/image-for.jpeg"; // Foreground Image
import HeroPng from "../../assets/engineer-construction.jpg"; // Foreground Image

import HeroBg from "../../assets/hero-bg2.jpg"; // Background Image
import { motion } from "framer-motion";

export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  const handleSendMessage = () => {
    const text = encodeURIComponent(
      `Hello E4 Solutions PVT Ltd. I am interested in your services.`
    );
    const whatsappLink = `https://wa.me/923225269194?text=${text}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <section className="bg-light overflow-hidden relative">
      {/* Navbar, Header, and Titlebar */}
      <Header />
      <Titlebar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden min-h-[760px]  ">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center  border-2 border-teal-500"
          style={{ backgroundImage: `url(${HeroBg})`, filter: "blur(5px)" }}
        ></div>

        {/* Dark Overlay */}
        
        <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 items-center px-4 min-h-[550px] max-w-[1300px] ">
          {/* Left Side: Foreground Image */}
         {/* Left Side: Foreground Image */}
{/* <div className="flex items-center justify-center border-2 border-teal-500"> */}
  <motion.img
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
    src={HeroPng}
    alt="Hero Image"
    className="w-[400px] md:w-[500px] xl:w-[600px] drop-shadow-lg"
  />
{/* </div> */}
{/* Right Side: Content */}
<div className="text-white space-y-6 px-4 lg:px-0">
    {/* Heading */}
    <motion.h1
      variants={FadeUp(0.6)}
      initial="initial"
      animate="animate"
      className="text-4xl lg:text-5xl font-bold leading-snug lg:leading-relaxed"
    >
      Discover Excellence
    </motion.h1>

    {/* Paragraph */}
    <p className="text-lg leading-relaxed lg:leading-loose w-full">
      Transforming Visions into Reality with E4 Solutions. Experience unparalleled 
      construction and consultancy expertise with E4 Solutions. Our commitment 
      to innovative solutions in HVAC, electrification, elevators/escalators, 
      construction supervision, and IT services ensures we meet your highest 
      expectations with quality and efficiency.
    </p>

    {/* Button */}
    <motion.div
      variants={FadeUp(0.8)}
      initial="initial"
      animate="animate"
      className="mt-4"
    >
      <button onClick={handleSendMessage} className="primary-btn flex items-center gap-2 group px-6 py-3 rounded-md text-white font-semibold">
        Reach Out Today
        <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
      </button>
    </motion.div>
  </div>
</div>

      </section>
    </section>
  );
};

export default Hero;
