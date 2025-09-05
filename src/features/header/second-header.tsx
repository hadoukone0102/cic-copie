"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logo } from "@/components/icons";
import { Search } from "lucide-react";

export default function SecondHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Le header devient flottant après avoir scrollé de 60px (hauteur approximative du FirstHeader)
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-50 
        flex flex-row justify-between items-center px-4 pt-4 pb-2
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? ''
          : 'bg-white'
        }
        ${isScrolled ? 'top-0' : 'top-[60px]'}
      `}
    >
      {/* Logo Section */}
      <div className="flex gap-4 items-center ml-30">
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
        <div className="transition h-[50px] duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span className="h-full text-center flex items-center justify-center">Nos offres</span>
        </div>
        <div className="transition h-[50px] duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span className="h-full text-center flex items-center justify-center">Vos projets</span>
        </div>
        <div className="transition h-[50px] duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span className="h-full text-center flex items-center justify-center">Simulation</span>
        </div>
        <div className="transition h-[50px] duration-300 text-black border-b-0 hover:border-b-2 hover:text-[#038189] hover:border-[#038189] cursor-pointer">
          <span className="h-full text-center flex items-center justify-center">Magazine</span>
        </div>
        <div className="transition duration-300 text-black border p-4 rounded-[100%] cursor-pointer hover:text-[#038189] hover:border-[#038189]">
          <Search size={16} className="m-auto h-full" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 mr-30">
        <div className="transition duration-300 text-[#752A86] cursor-pointer">
          <span>Ouvrir un compte</span>
        </div>
        <div className="transition duration-300 text-[#DA2201] cursor-pointer">
          <span>Espace client</span>
        </div>
      </div>
    </div>
  );
}