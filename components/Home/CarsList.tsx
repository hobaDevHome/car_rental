import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

const CarsList = ({ carsList }: any) => {
  const [selectedCar, setselectedCar] = useState();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      {carsList &&
        carsList.map((car: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              (document as any).getElementById("my_modal_4").showModal();
              setselectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
      <div>
        <dialog id="my_modal_4" className="modal">
          <BookingModal car={selectedCar} />
        </dialog>
      </div>
    </div>
  );
};

export default CarsList;
