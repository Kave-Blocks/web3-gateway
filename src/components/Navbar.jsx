import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-10 justify-between items-center text-white navbar">
      <img src={logo} alt="web3-gateway" className="" />

      <ul className="list-none md:flex hidden justify-end items-center flex-1 font-poppins font-normal cursor-pointer text-[16px] text-white">
        <li className="mr-16 text-xl">
          <a href="/">Home</a>
        </li>
        <li className="mr-16 text-xl">
          <a href="/courses">Courses</a>
        </li>
        <li className="text-xl">
          <a href="/connect-wallet">Connect Wallet</a>
        </li>
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 font-poppins font-normal cursor-pointer text-[16px] text-white">
            <li className="mb-6 text-xl">
              {" "}
              <a href="/">Home</a>
            </li>
            <li className="mb-6 text-xl">
              {" "}
              <a href="/courses">Courses</a>
            </li>
            <li className="mb-6 text-xl">
              <a href="/connect-wallet">Connect Wallet</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
