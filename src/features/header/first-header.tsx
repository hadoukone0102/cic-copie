"use client";
import React, { useState, useEffect } from "react";

export default function FirstHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Cache le FirstHeader quand on scroll vers le bas
      setIsVisible(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-40
        flex flex-row justify-between text-[14px] items-center px-4 pt-2 pb-2
        bg-white text-black border-b border-gray-300
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
      `}
    >
      {/* Logo Section */}
      <div className="flex gap-4 items-center ml-30">
        <div className="transition duration-300 text-[#038189] border-b-2 hover:border-[#038189] cursor-pointer">
          <span>particulier</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Auto-entrepreneur</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Professionnels</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Entreprise</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Agriculteur</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Associations</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4 mr-30">
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Site institutionnel</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Centre d'aide</span>
        </div>
        <div className="transition duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span>Fr</span>
        </div>
      </div>
    </div>
  );
}