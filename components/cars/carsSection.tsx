"use client";

import React, { useState } from "react";
import CarBox from "./carBox";
import { carsData } from "@/data/carsData";

export const CarsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Calculate indexes
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = carsData.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(carsData.length / carsPerPage);

  return (
    <section className="md:pt-[76px] md:pb-[63px] py-[43px] px-4 bg-background">
      <div className="container mx-auto">
        {/* Car Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 transition-all duration-300 ease-in-out">
          {currentCars.map((car: any, idx: number) => (
            <CarBox key={idx} car={car} />
          ))}
        </div>

       
      </div>
    </section>
  );
};
