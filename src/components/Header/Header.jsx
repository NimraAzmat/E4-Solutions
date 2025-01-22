import React from 'react';

const Header = () => {
  return (
    <div className="bg-dark3 text-white py-3 px-10 flex justify-between items-center text-sm">
    
      <span>📍 Leading Construction and Consultancy Services Since 2018</span>
      
      <div className="flex space-x-3">
        <a href="#" className="text-white">🔵fb</a> {/* Facebook Icon */}
        <a href="#" className="text-white">❌twitter</a> {/* Close Icon */}
        <a href="#" className="text-white">🟢insta</a> {/* Instagram Icon */}
      </div>
    </div>
  );
};

export default Header;
