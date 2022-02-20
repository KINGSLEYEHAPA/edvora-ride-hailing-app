import React from "react";
import profileImg from "../assets/images/Rectangle.png";

const Header = () => {
  return (
    <div className="lg:text-white lg:bg-neutral-900 lg:flex lg:flex-row lg:justify-between lg:items-center px-6 py-4 ">
      <p className="text-3xl">Edvora</p>
      <div className="lg:flex lg:justify-end lg:items-center lg:gap-6">
        <p>Dhruv Singh</p>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
