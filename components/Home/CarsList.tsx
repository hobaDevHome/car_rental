import React from "react";
import CarCard from "./CarCard";

const CarsList = ({ carsList }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      {carsList &&
        carsList.map((car: any, index: number) => (
          <div>
            <CarCard car={car} />
          </div>
        ))}
    </div>
  );
};

export default CarsList;
