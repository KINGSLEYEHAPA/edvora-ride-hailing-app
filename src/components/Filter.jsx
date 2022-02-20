import React from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Filter = () => {
  return (
    <div className="absolute lg:w-48 lg:h-44 lg:flex lg:flex-col lg:top-6 lg:right-2  bg-neutral-900 lg:justify-between lg:space-y-5 lg:p-6 lg:shadow-2xl">
      <h2 className="text-trueGray-400  text-md">Filters</h2>
      <hr className="text-trueGray-400"></hr>
      <div className="flex relative">
        <select name="state" id="state" className=" w-full">
          <option value="volvo">Edo</option>
          <option value="saab">Lagos</option>
        </select>
        <span className="absolute text-trueGray-500 top-0.5 right-1">
          <VscTriangleUp />
        </span>
        <span className="absolute text-trueGray-500 top-0.5 right-1">
          <VscTriangleDown />
        </span>
      </div>
      <div className="flex relative">
        <select name="city" id="city" className=" w-full">
          <option value="volvo">Warri</option>
          <option value="saab">Lekki</option>
        </select>
        <span className="absolute text-trueGray-500 top-0.5 right-1">
          <VscTriangleUp />
        </span>
        <span className="absolute text-trueGray-500 top-0.5 right-1">
          <VscTriangleDown />
        </span>
      </div>
    </div>
  );
};

export default Filter;
