import React, { useState, useEffect } from "react";
import { getStoresLocations } from "@/services";

const Form = () => {
  const [storesLocations, setstoresLocations] = useState<any>([]);
  const [formVlaue, setformVlaue] = useState({
    storeLocaion: "",
    pickupDate: "",
    dropOffDate: "",
    pickupTime: "",
    dropOffTime: "",

    contactNumber: "",
  });

  useEffect(() => {
    getStoresLocations_();
  }, []);

  const getStoresLocations_ = async () => {
    const res: any = await getStoresLocations();

    console.log("res", res.storeLocations);
    setstoresLocations(res.storeLocations);
  };

  const handleChange = (event: any) => {
    setformVlaue({
      ...formVlaue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("formVlaue", formVlaue);
  };

  return (
    <div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Pick a store location</span>
        </label>
        <select
          className="select select-bordered"
          name="storeLocaion"
          onChange={handleChange}
        >
          <option disabled selected>
            Pick a location
          </option>
          {storesLocations.length > 0 && (
            <>
              {storesLocations.map((loc: any, index: number) => (
                <option key={index}>{loc.address}</option>
              ))}
            </>
          )}
        </select>
      </div>
      <div className="flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Pick Up Date</span>
          </label>
          <input
            type="date"
            placeholder="select a pick up date"
            className="input input-bordered w-full "
            name="pickupDate"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Drop of Date</span>
          </label>
          <input
            type="date"
            placeholder="select a pick up date"
            className="input input-bordered w-full "
            name="dropOffDate"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Pick Up time</span>
          </label>
          <input
            type="time"
            placeholder="select a pick up date"
            className="input input-bordered w-full "
            name="pickupTime"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Drop off time</span>
          </label>
          <input
            type="time"
            placeholder="select a drop off time"
            className="input input-bordered w-full "
            name="dropOffTime"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Contact Number</span>
        </label>
        <input
          type="text"
          placeholder="contact number"
          className="input input-bordered w-full "
          name="contactNumber"
          onChange={handleChange}
        />
      </div>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn" onClick={handleSubmit}>
            Save
          </button>
          <button className="btn ml-3">Close</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
