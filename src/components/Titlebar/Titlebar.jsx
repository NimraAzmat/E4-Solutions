import React from 'react';

const Titlebar = () => {
  const handleSendMessage = () => {
    const text = encodeURIComponent(
      `Hello E4 Solutions PVT Ltd. I am interested in your services.`
    );
    const whatsappLink = `https://wa.me/923225269194?text=${text}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="bg-titlebg py-11 px-12 flex justify-between items-center ">
      <h1 className="text-3xl font-bold text-navbg">E4 Solutions PVT Ltd.</h1>
      <span className="text-3xl text-gray font-semibold">(555) 555-1234</span>
      <div className="text-right">
        <span className="text-navbg text-m">Available Daily from 7am to 10pm</span>
        <button onClick={handleSendMessage} className="primary-btn ml-4  text-white px-4 py-2 rounded shadow-md">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Titlebar;
