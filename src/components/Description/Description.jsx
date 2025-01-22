import React from 'react';
import building from '../../assets/building.jpg';

const Description = () => {
  return (
    <div className="relative z-10 mx-auto px-6 py-12 lg:py-40 xl:px-12 2xl:px-36 bg-navbg ">
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-12">
      <div class="flex-1 ">
        <div className="mb-6 text-balance text-center text-5xl font-semibold text-white lg:text-left">Elevate Your Projects with E4 Solutions PVT Ltd</div>
        <div className="text-center text-xl font-light lg:text-left text-white">
          Experience unparalleled construction and consultancy services with E4 Solutions PVT Ltd. Specializing in HVAC, electrification, elevators/escalators, construction supervision, and IT services, we have been a trusted partner since 2020. Our team focuses on delivering meticulous and tailored solutions, ensuring that every project reflects your vision and meets your requirements.
        <br/><br/>
          With a commitment to excellence, we transform challenges into effective solutions. Our rigorous approach guarantees that all aspects are considered from planning through to completion. Explore our extensive portfolio to see how we turn innovative ideas into reality and exceed client expectations.
        <br/><br/>
          Ready to take your project to the next level? Connect with us through our contact form and discover how E4 Solutions PVT Ltd can make your vision come to life with precision and expertise.
        </div>
      </div>
      <div className="description-right w-1/2 p-20">
        <img src={building} alt="E4 Solutions" className="w-full h-full object-cover " />
      </div>
    </div>
    </div>
  );
};

export default Description;