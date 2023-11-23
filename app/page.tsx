"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Hero from "../components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarsFilters from "@/components/Home/CarsFilters";
import { getCarsList } from "@/services";
import CarsList from "@/components/Home/CarsList";

export default function Home() {
  const [carsList, setcarsList] = useState<any>([]);
  const [originalCarsList, setoriginalCarsList] = useState<any>([]);
  useEffect(() => {
    getCarsList_();
  }, []);
  const getCarsList_ = async () => {
    const res: any = await getCarsList();

    setcarsList(res.carLists);
    setoriginalCarsList(res.carLists);
  };

  const filterBrands = (brand: string) => {
    let filteredCarList = originalCarsList.filter(
      (car: any) => car.carBrand === brand
    );
    setcarsList(filteredCarList);
  };
  const orderCarsList = (order: number) => {
    console.log("order", order);

    let sortedList = [...originalCarsList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setcarsList(sortedList);
  };

  return (
    <div className="p-5 sm:p-10 md:p-20">
      <Hero />
      <SearchInput />
      <CarsFilters
        carsList={originalCarsList}
        setselectedBrand={(value: string) => filterBrands(value)}
        orderCarList={(value: number) => orderCarsList(value)}
      />
      <CarsList carsList={carsList} />
    </div>
  );
}
