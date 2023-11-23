import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

const BookingModal = ({ car }: any) => {
  return (
    <div className="modal-box w-11/12 max-w-5xl ">
      <h3 className="font-bold text-lg">Rent a Car now!</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div>
          <CarCard car={car} />
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
