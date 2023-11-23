"use client ";

import React, { useState, useEffect } from "react";

const CarsFilters = ({ carsList, setselectedBrand, orderCarList }: any) => {
  const [brands, setBrands] = useState<any>([]);

  useEffect(() => {
    getBrands();
  }, [carsList]);

  const getBrands = () => {
    if (carsList) {
      const brands = carsList.map((car: any) => car.carBrand);
      const barndset = new Set(brands);
      setBrands(Array.from(barndset));
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-3xl font-bold">Cars Catalog</p>
        <p>Explore our cars you might likes</p>
      </div>
      <div className=" gap-3 hidden md:flex">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setselectedBrand(e.target.value)}
        >
          <option disabled selected>
            Car Brand
          </option>
          {brands.length > 0 && (
            <>
              {brands.map((brand: string, index: number) => (
                <option key={index}>{brand}</option>
              ))}
            </>
          )}
        </select>
      </div>
    </div>
  );
};

export default CarsFilters;
