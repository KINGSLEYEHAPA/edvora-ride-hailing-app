import React from "react";
import profileImg from "../assets/images/Rectangle.png";

const Header = () => {
  return (
    <div className="text-white bg-neutral-900 flex lg:flex-row justify-between items-center px-6 py-4 ">
      <p className="text-3xl cursor-pointer">Edvora</p>
      <div className="flex justify-end items-center gap-6">
        <p>Dhruv Singh</p>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
