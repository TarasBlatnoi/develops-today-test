"use client";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";
import generateYears from "@/utils/generateYears";

const CarFilterSelector = ({ makesOptions }) => {
  const [carFilters, setCarFilters] = useState({ makes: "", year: "" });
  const yearOptions = generateYears(2015);
  function handleChangeMakes(makes) {
    setCarFilters((prev) => ({ ...prev, makes }));
  }
  function handleChangeYear(year) {
    setCarFilters((prev) => ({ ...prev, year }));
  }
  yearOptions.unshift({ value: "", label: "Select year of the car" });
  const filtersChosen = carFilters.makes && carFilters.year;
  return (
    <div className="h-full w-3/6">
      <div className="flex justify-around w-full m-auto">
        <Dropdown
          mainLabel="Select vehicle type"
          options={makesOptions}
          onChange={handleChangeMakes}
          value={carFilters.makes}
        />
        <Dropdown
          mainLabel="Select year"
          options={yearOptions}
          onChange={handleChangeYear}
          value={carFilters.year}
        />
      </div>
      {filtersChosen ? (
        <Link
          href={`/result/${carFilters.makes}/${carFilters.year}`}
          className="mt-20 inline-block px-10 py-2 bg-slate-50 rounded-lg"
        >
          Next
        </Link>
      ) : (
        <span className="mt-20 inline-block px-10 py-2 bg-slate-50 rounded-lg brightness-50">
          Next
        </span>
      )}
    </div>
  );
};

export default CarFilterSelector;
