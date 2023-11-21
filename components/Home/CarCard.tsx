import React from "react";
import Image from "next/image";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";

const CarCard = ({ car }: any) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg hover:border border-blue-400 cursor-pointer ">
      <h2 className="text-xl font-bold">{car.name}</h2>
      <p className="text-xs mt-2 ">
        $<span className="text-xl font-bold">{car.price}</span>/day
      </p>

      <img
        src={car.image.url}
        alt=""
        style={{ width: 200, height: 200, objectFit: "contain" }}
        className="mx-auto"
      />
      <div className="flex justify-between gap-2">
        <div className="flex flex-col items-center">
          <PiSteeringWheelFill className="text-xl text-gray-500 mb-3" />
          <p className="text-xs">{car.carType}</p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineAirlineSeatReclineNormal className="text-xl text-gray-500 mb-3" />
          <p className="text-xs">{car.seats} Seat</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGasPump className="text-xl text-gray-500 mb-3" />
          <p className="text-xs">{car.carAvg} MPG</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
