import React, { useEffect, useState } from "react";
import Container from "./Layer/Container";
import Image from "./Layer/Image";
import logo from "/Logo.png";
import Li from "./Layer/Li";
import { FaBars, FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import UserIcon from "./Layer/filterComponents/UserIcon";
import CartPopUp from "./Layer/filterComponents/CartPopUp";

const Navbar = () => {
  let [Display, setDisplay] = useState(false);
  useEffect(() => {
    function ahi() {
      if (window.innerWidth <= 767.99) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    }
    ahi();
    window.addEventListener("resize", ahi());
  }, []);
  return (
    <nav className=" border-b border-b-solid border-b-[#979797]">
      <Container className="px-3 md:px-0 relative py-4 md:py-8 flex gap-x-5 justify-end items-center md:justify-center">
        <Image
          className="absolute top-1/2 left-3 md:left-0 -translate-y-1/2"
          src={logo}
        />
        {
          <ul
            className={`transition-all duration-500 gap-y-3 pt-4 md:py-0 md:gap-y-0 md:gap-x-10 justify-start bg-[rgba(68,68,68,0.2)] backdrop-blur-sm md:blur-0 md:bg-transparent absolute md:static flex flex-col md:flex-row w-3/4 h-screen md:h-auto md:w-auto top-full right-0 text-center z-10 ${
              Display ? "translate-x-0 visible" : "translate-x-full invisible"
            }`}
          >
            <Li link="/" className="font-bold text-head" menu="Home" />
            <Li link="/shop" menu="Shop" />
            <Li link="/about" menu="About" />
            <Li link="/journal" menu="Journal" />
          </ul>
        }
        <div className="account flex items-center gap-x-5 md:gap-x-10 md:hidden">
          <UserIcon />
          <CartPopUp />
        </div>
        <div
          onClick={() => setDisplay(!Display)}
          className="icon block md:hidden"
        >
          <FaBars />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
