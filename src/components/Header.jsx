import React from "react";
import profileImg from "../assets/images/Rectangle.png";

const Header = () => {
  return (
    <div className="lg:text-white lg:bg-neutral-900 lg:flex lg:flex-row justify-between ">
      <p className="text-xl">Edvora</p>
      <div>
        <p>Dhruv Singh</p>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
