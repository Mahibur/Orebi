import React, { useState } from "react";
import Container from "./Layer/Container";
import Li from "../component/Layer/Li";
import { FaBarsProgress, FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import HoverMenu from "./Layer/filterComponents/HoverMenu";
import FilterLi from "./Layer/filterComponents/FilterLi";
import MenuList from "./Layer/filterComponents/MenuList";
import UserIcon from "./Layer/filterComponents/UserIcon";
import Button from "./Layer/Button";
import CartPopUp from "./Layer/filterComponents/CartPopUp";

const Filter = () => {
  let [show, setShow] = useState(false);

  return (
    <div className="bg-[#F5F5F3] py-3 md:py-6">
      <Container className="flex md:justify-between items-center relative">
        <div
          onClick={() => setShow(!show)}
          className="category flex items-center gap-x-2.5"
        >
          <FaBarsProgress />
          <p className="font-head text-sm text-head hidden md:block">
            Shop by Category
          </p>
        </div>
        {show && (
          <ul className="absolute left-0 top-full md:w-[263px] w-[210px] bg-[#262626] z-[999]">
            <Li
              menu="Accesories"
              className="inline-block text-white/70 hover:text-white py-4 pl-5 hover:pl-8 w-full border-b-[0.5px] border-[#2D2D2D]"
            >
              <HoverMenu>
                <MenuList title="Phones">
                  <FilterLi title="Phone 1" />
                  <FilterLi title="Phone 2" />
                  <FilterLi title="Phone 3" />
                  <FilterLi title="Phone 4" />
                  <FilterLi title="Phone 5" />
                  <FilterLi title="Phone 6" />
                  <FilterLi title="Phone 7" />
                </MenuList>
                <MenuList title="Computers">
                  <FilterLi title="Computer 1" />
                  <FilterLi title="Computer 2" />
                  <FilterLi title="Computer 3" />
                  <FilterLi title="Computer 4" />
                  <FilterLi title="Computer 5" />
                  <FilterLi title="Computer 6" />
                  <FilterLi title="Computer 7" />
                </MenuList>
                <MenuList title="Smart watches">
                  <FilterLi title="Smart watches 1" />
                  <FilterLi title="Smart watches 2" />
                  <FilterLi title="Smart watches 3" />
                  <FilterLi title="Smart watches 4" />
                  <FilterLi title="Smart watches 5" />
                  <FilterLi title="Smart watches 6" />
                  <FilterLi title="Smart watches 7" />
                </MenuList>
                <MenuList title="Cameras">
                  <FilterLi title="Camera 1" />
                  <FilterLi title="Camera 2" />
                  <FilterLi title="Camera 3" />
                  <FilterLi title="Camera 4" />
                  <FilterLi title="Camera 5" />
                  <FilterLi title="Camera 6" />
                  <FilterLi title="Camera 7" />
                </MenuList>
              </HoverMenu>
            </Li>
            <Li
              menu="Furniture"
              className="inline-block text-white/70 hover:text-white py-4 pl-5 hover:pl-8 w-full border-b-[0.5px] border-[#2D2D2D]"
            >
              <HoverMenu>
                <MenuList title="Computers">
                  <FilterLi title="Computer 1" />
                  <FilterLi title="Computer 2" />
                  <FilterLi title="Computer 3" />
                  <FilterLi title="Computer 4" />
                  <FilterLi title="Computer 5" />
                  <FilterLi title="Computer 6" />
                  <FilterLi title="Computer 7" />
                </MenuList>
                <MenuList title="Smart watches">
                  <FilterLi title="Smart watches 1" />
                  <FilterLi title="Smart watches 2" />
                  <FilterLi title="Smart watches 3" />
                  <FilterLi title="Smart watches 4" />
                  <FilterLi title="Smart watches 5" />
                  <FilterLi title="Smart watches 6" />
                  <FilterLi title="Smart watches 7" />
                </MenuList>
                <MenuList title="Cameras">
                  <FilterLi title="Camera 1" />
                  <FilterLi title="Camera 2" />
                  <FilterLi title="Camera 3" />
                  <FilterLi title="Camera 4" />
                  <FilterLi title="Camera 5" />
                  <FilterLi title="Camera 6" />
                  <FilterLi title="Camera 7" />
                </MenuList>
              </HoverMenu>
            </Li>
            <Li
              menu="Electronics"
              className="inline-block text-white/70 hover:text-white py-4 pl-5 hover:pl-8 w-full border-b-[0.5px] border-[#2D2D2D]"
            >
              <HoverMenu>
                <MenuList title="Phones">
                  <FilterLi title="Phone 1" />
                  <FilterLi title="Phone 2" />
                  <FilterLi title="Phone 3" />
                  <FilterLi title="Phone 4" />
                  <FilterLi title="Phone 5" />
                  <FilterLi title="Phone 6" />
                  <FilterLi title="Phone 7" />
                </MenuList>
                <MenuList title="Computers">
                  <FilterLi title="Computer 1" />
                  <FilterLi title="Computer 2" />
                  <FilterLi title="Computer 3" />
                  <FilterLi title="Computer 4" />
                  <FilterLi title="Computer 5" />
                  <FilterLi title="Computer 6" />
                  <FilterLi title="Computer 7" />
                </MenuList>
                <MenuList title="Smart watches">
                  <FilterLi title="Smart watches 1" />
                  <FilterLi title="Smart watches 2" />
                  <FilterLi title="Smart watches 3" />
                  <FilterLi title="Smart watches 4" />
                  <FilterLi title="Smart watches 5" />
                  <FilterLi title="Smart watches 6" />
                  <FilterLi title="Smart watches 7" />
                </MenuList>
                <MenuList title="Cameras">
                  <FilterLi title="Camera 1" />
                  <FilterLi title="Camera 2" />
                  <FilterLi title="Camera 3" />
                  <FilterLi title="Camera 4" />
                  <FilterLi title="Camera 5" />
                  <FilterLi title="Camera 6" />
                  <FilterLi title="Camera 7" />
                </MenuList>
              </HoverMenu>
            </Li>
            <Li
              menu="Clothes"
              className="inline-block text-white/70 hover:text-white py-4 pl-5 hover:pl-8 w-full border-b-[0.5px] border-[#2D2D2D]"
            >
              <HoverMenu>
                <MenuList title="Phones">
                  <FilterLi title="Phone 1" />
                  <FilterLi title="Phone 2" />
                  <FilterLi title="Phone 3" />
                  <FilterLi title="Phone 4" />
                  <FilterLi title="Phone 5" />
                  <FilterLi title="Phone 6" />
                  <FilterLi title="Phone 7" />
                </MenuList>
                <MenuList title="Computers">
                  <FilterLi title="Computer 1" />
                  <FilterLi title="Computer 2" />
                  <FilterLi title="Computer 3" />
                  <FilterLi title="Computer 4" />
                  <FilterLi title="Computer 5" />
                  <FilterLi title="Computer 6" />
                  <FilterLi title="Computer 7" />
                </MenuList>
                <MenuList title="Smart watches">
                  <FilterLi title="Smart watches 1" />
                  <FilterLi title="Smart watches 2" />
                  <FilterLi title="Smart watches 3" />
                  <FilterLi title="Smart watches 4" />
                  <FilterLi title="Smart watches 5" />
                  <FilterLi title="Smart watches 6" />
                  <FilterLi title="Smart watches 7" />
                </MenuList>
                <MenuList title="Cameras">
                  <FilterLi title="Camera 1" />
                  <FilterLi title="Camera 2" />
                  <FilterLi title="Camera 3" />
                  <FilterLi title="Camera 4" />
                  <FilterLi title="Camera 5" />
                  <FilterLi title="Camera 6" />
                  <FilterLi title="Camera 7" />
                </MenuList>
              </HoverMenu>
            </Li>
            <Li
              menu="Bags"
              className="inline-block text-white/70 hover:text-white py-4 pl-5 hover:pl-8 w-full border-b-[0.5px] border-[#2D2D2D]"
            >
              <HoverMenu>
                <MenuList title="Phones">
                  <FilterLi title="Phone 1" />
                  <FilterLi title="Phone 2" />
                  <FilterLi title="Phone 3" />
                  <FilterLi title="Phone 4" />
                  <FilterLi title="Phone 5" />
                  <FilterLi title="Phone 6" />
                  <FilterLi title="Phone 7" />
                </MenuList>
                <MenuList title="Computers">
                  <FilterLi title="Computer 1" />
                  <FilterLi title="Computer 2" />
                  <FilterLi title="Computer 3" />
                  <FilterLi title="Computer 4" />
                  <FilterLi title="Computer 5" />
                  <FilterLi title="Computer 6" />
                  <FilterLi title="Computer 7" />
                </MenuList>
                <MenuList title="Smart watches">
                  <FilterLi title="Smart watches 1" />
                  <FilterLi title="Smart watches 2" />
                  <FilterLi title="Smart watches 3" />
                  <FilterLi title="Smart watches 4" />
                  <FilterLi title="Smart watches 5" />
                  <FilterLi title="Smart watches 6" />
                  <FilterLi title="Smart watches 7" />
                </MenuList>
                <MenuList title="Cameras">
                  <FilterLi title="Camera 1" />
                  <FilterLi title="Camera 2" />
                  <FilterLi title="Camera 3" />
                  <FilterLi title="Camera 4" />
                  <FilterLi title="Camera 5" />
                  <FilterLi title="Camera 6" />
                  <FilterLi title="Camera 7" />
                </MenuList>
              </HoverMenu>
            </Li>
            <Li
              menu="Home appliances"
              className="inline-block text-white/70 hover:text-white py-4 pl-5 hover:pl-8 w-full border-b-[0.5px] border-[#2D2D2D]"
            >
              <HoverMenu>
                <MenuList title="Phones">
                  <FilterLi title="Phone 1" />
                  <FilterLi title="Phone 2" />
                  <FilterLi title="Phone 3" />
                  <FilterLi title="Phone 4" />
                  <FilterLi title="Phone 5" />
                  <FilterLi title="Phone 6" />
                  <FilterLi title="Phone 7" />
                </MenuList>
                <MenuList title="Computers">
                  <FilterLi title="Computer 1" />
                  <FilterLi title="Computer 2" />
                  <FilterLi title="Computer 3" />
                  <FilterLi title="Computer 4" />
                  <FilterLi title="Computer 5" />
                  <FilterLi title="Computer 6" />
                  <FilterLi title="Computer 7" />
                </MenuList>
                <MenuList title="Smart watches">
                  <FilterLi title="Smart watches 1" />
                  <FilterLi title="Smart watches 2" />
                  <FilterLi title="Smart watches 3" />
                  <FilterLi title="Smart watches 4" />
                  <FilterLi title="Smart watches 5" />
                  <FilterLi title="Smart watches 6" />
                  <FilterLi title="Smart watches 7" />
                </MenuList>
                <MenuList title="Cameras">
                  <FilterLi title="Camera 1" />
                  <FilterLi title="Camera 2" />
                  <FilterLi title="Camera 3" />
                  <FilterLi title="Camera 4" />
                  <FilterLi title="Camera 5" />
                  <FilterLi title="Camera 6" />
                  <FilterLi title="Camera 7" />
                </MenuList>
              </HoverMenu>
            </Li>
          </ul>
        )}
        <div className="search relative w-full md:w-auto">
          <input
            className="w-full md:w-[601px] py-2 md:py-4 pl-2.5 md:pl-5 outline-0 "
            type="text"
            placeholder="Search Products"
          />
          <FaSearch className="absolute right-2.5 md:right-5 top-1/2 -translate-y-1/2 cursor-pointer" />
        </div>
        <div className="account hidden md:flex items-center gap-x-10">
          <UserIcon />
          <div className="right relative">
            <CartPopUp />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
