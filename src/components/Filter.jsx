import React from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Filter = () => {
  return (
    <div className="absolute lg:w-48 lg:h-44 lg:flex lg:flex-col lg:top-7 lg:right-2 shadow  bg-neutral-900 lg:justify-between lg:space-y-5 lg:py-4 px-5  rounded-xl">
      <h2 className="text-neutral-700  text-md">Filters</h2>
      <hr className="text-neutral-700 border-t-3 border-neutral-700 relative bottom-3"></hr>
      <div className="flex relative">
        <select
          name="state"
          id="state"
          className=" w-full bg-neutral-700 p-1 text-sm outline-none rounded"
        >
          <option value="volvo">Edo</option>
          <option value="saab">Lagos</option>
        </select>
        <span className="absolute text-neutral-700 top-0.5 right-1">
          <VscTriangleUp />
        </span>
        <span className="absolute text-neutral-700 top-0.5 right-1">
          <VscTriangleDown />
        </span>
      </div>
      <div className="flex relative">
        <select
          name="city"
          id="city"
          className=" w-full bg-neutral-700 p-1 text-sm outline-none rounded"
        >
          <option value="volvo">Warri</option>
          <option value="saab">Lekki</option>
        </select>
        <span className="absolute text-neutral-700 top-0.5 right-1">
          <VscTriangleUp />
        </span>
        <span className="absolute text-neutral-700 top-0.5 right-1">
          <VscTriangleDown />
        </span>
      </div>
    </div>
  );
};

export default Filter;
