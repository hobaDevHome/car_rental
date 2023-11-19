"use client ";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <p style={{ lineHeight: 1.5 }} className="text-6xl font-bold mb-8 ">
          Premium Car <span className="text-blue-500">Rental</span> in Your Area
        </p>
        <p className="text-gray-500 mb-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </p>
        <div className="bg-blue-500 rounded-xl  text-white p-3 cursor-pointer w-[130px] transition-all ease-in hover:scale-110 mt-4">
          Explore cars
        </div>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt=""
          width={400}
          height={500}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
