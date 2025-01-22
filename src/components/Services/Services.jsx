import React, { useState } from "react";
import hvac from "../../assets/hvac.jpg"
import electric from "../../assets/electric.jpg"
import elevator from "../../assets/elevator.jpg"
import  col from "../../assets/two-colleagues.jpg"
import en from "../../assets/engineering-workspace.jpg"
import  doc from "../../assets/documents-drafts.jpg"
import  con from "../../assets/consultancy.jpg"
import design from "../../assets/workspace-featuring.jpg"
import { motion, AnimatePresence } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "HVAC Solutions",
    body: "Energy-efficient HVAC systems designed with precision for optimal performance. We specialize in installations, repairs, and maintenance to maximize energy savings while ensuring year-round comfort. Our team offers tailored solutions for residential, commercial, and industrial clients, using the latest technology to create sustainable environments.",
    image: hvac,
  },
  {
    id: 2,
    title: "Electrification",
    body: "Advanced electrical solutions with a focus on quality assurance and reliability. From installations to upgrades, we ensure safety and efficiency in every electrical project we undertake. Our services include power distribution, wiring, and energy management systems, designed to meet the evolving needs of modern infrastructure.",
    image: electric,
  },
  {
    id: 3,
    title: "Elevators & Escalators",
    body: "Modernization and installation services ensuring safety and efficiency. We prioritize cutting-edge technology and robust designs for seamless vertical transportation solutions. Our offerings include custom designs, routine maintenance, and system upgrades to enhance performance and extend lifespan.",
    image: elevator,
  },
  {
    id: 4,
    title: "Construction Supervision",
    body: "Expert oversight for seamless execution and on-time project completion. Our team ensures that every aspect of the project meets quality, safety, and compliance standards. With meticulous attention to detail, we help clients avoid delays, manage budgets, and achieve outstanding results.",
    image: doc,
  },
  {
    id: 5,
    title: "System Design Oversight",
    body: "Comprehensive design reviews to ensure compliance with industry standards. We provide insights and recommendations to enhance project efficiency and minimize risks. Our experts work closely with stakeholders to optimize designs, ensuring functionality and cost-effectiveness throughout the project lifecycle.",
    image: en,
  },
  {
    id: 6,
    title: "Design Engineering",
    body: "Advanced engineering services, from calculations to vendor drawing reviews. Our team delivers innovative and practical solutions to meet complex design challenges. By leveraging the latest tools and techniques, we ensure that designs are robust, sustainable, and aligned with client expectations.",
    image: design,
  },
  {
    id: 7,
    title: "Quality Control",
    body: "Stringent quality control measures to ensure flawless execution. We employ the latest methodologies to uphold superior standards across all project stages. From material inspections to process audits, our approach guarantees reliability, durability, and compliance with regulations.",
    image: col,
  },
  {
    id: 8,
    title: "Technical Consultancy",
    body: "Professional guidance for innovative, cost-effective construction projects. Our experts offer tailored solutions to meet the unique requirements of every client. Whether it’s feasibility studies, project planning, or risk analysis, we ensure that each phase of the project is executed with precision.",
    image: con,
  },
];

//   {
//     id: 1,
//     title: "HVAC Solutions",
//     body: "Energy-efficient HVAC systems designed with precision for optimal performance.",
//     image: hvac,
//   },
//   {
//     id: 2,
//     title: "Electrification",
//     body: "Advanced electrical solutions with a focus on quality assurance and reliability.",
//     image: electric,
//   },
//   {
//     id: 3,
//     title: "Elevators & Escalators",
//     body: "Modernization and installation services ensuring safety and efficiency.",
//     image: elevator,
//   },
//   {
//     id: 4,
//     title: "Construction Supervision",
//     body: "Expert oversight for seamless execution and on-time project completion.",
//     image: doc,
//   },
//   {
//     id: 5,
//     title: "System Design Oversight",
//     body: "Comprehensive design reviews to ensure compliance with industry standards.",
//     image: en,
//   },
//   {
//     id: 6,
//     title: "Design Engineering",
//     body: "Advanced engineering services, from calculations to vendor drawing reviews.",
//     image: design,
//   },
//   {
//     id: 7,
//     title: "Quality Control",
//     body: "Stringent quality control measures to ensure flawless execution.",
//     image: col,
//   },
//   {
//     id: 8,
//     title: "Technical Consultancy",
//     body: "Professional guidance for innovative, cost-effective construction projects.",
//     image: con,
//   },
// ];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ServicesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ServicesData.length) % ServicesData.length
    );
  };

  // Function to get the current 4 services to display
  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % ServicesData.length;
      visibleServices.push(ServicesData[index]);
    }
    return visibleServices;
  };

  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-lg text-left pb-10 text-navbg">
          ELEVATE YOUR CONSTRUCTION EXPERIENCE WITH E4 SOLUTIONS PVT LTD.
        </h1>
        <div className="max-w-[450px]">
          <h1 className="text-4xl font-bold text-left pb-10 text-secondary">
            Tailored Services, Proven Expertise Since 2018
          </h1>
        </div>
        <div className="flex justify-center items-center mb-4 relative">
          {/* Previous Button */}
          <button
            className="bg-navbg text-white font-semibold py-2 px-4 rounded-md absolute left-0 top-1/2 transform -translate-y-1/2"
            onClick={handlePrev}
          >
             ❮
          </button>

          {/* Services Grid with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {getVisibleServices().map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
                  className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-lg font-semibold">{service.title}</h1>
                    <p className="text-sm">{service.body}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            className="bg-navbg text-white font-semibold py-2 px-4 rounded-md absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={handleNext}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};


export default Services;

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < ServicesData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else {
//       setCurrentIndex(ServicesData.length - 1);
//     }
//   };

//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16">
//         <h1 className="text-lg  text-left pb-10 text-navbg">
//           ELEVATE YOUR CONSTRUCTION EXPERIENCE WITH E4 SOLUTIONS PVT LTD.
//         </h1>
//         <div className="max-w-[450px] ">
//           <h1 className="text-4xl font-bold text-left pb-10 text-secondary">
//             Tailored Services, Proven Expertise Since 2020
//           </h1>
//         </div>
//         <div className="flex justify-center items-center mb-4">
//           <button
//             className="bg-navbg text-white font-semibold py-2 px-4 rounded-md absolute left-0"
//             onClick={handlePrev}
//           >
//             <BiSupport/>
//           </button>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {ServicesData.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl ${
//                   index === currentIndex ? "block" : "hidden"
//                 }`}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-40 object-cover rounded-t-2xl"
//                 />
//                 <div className="flex flex-row gap-4 items-center justify-center">
//                   <div className="flex flex-col gap-2">
//                     <h1 className="text-lg font-semibold">{service.title}</h1>
//                     <p className="text-sm">{service.body}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             className="bg-navbg text-white font-semibold py-2 px-4 rounded-md absolute right-0"
//             onClick={handleNext}
//           >
//             <BiSupport/>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;