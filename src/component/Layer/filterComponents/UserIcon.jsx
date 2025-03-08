import React, { useState } from "react";
import Button from "../Button";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const UserIcon = () => {
  let [pop, setPop] = useState(false);

  return (
    <>
      <div
        onClick={() => setPop(!pop)}
        className="left flex items-center gap-x-2.5 relative"
      >
        <FaUser />
        <IoMdArrowDropdown />
        {pop && (
          <div className="user absolute right-0 top-[150%] z-50 flex flex-col items-center w-48">
            <Button className="text-white" text="My Account" />
            <Button className="bg-white text-head font-normal" text="Log out" />
          </div>
        )}
      </div>
    </>
  );
};
export default UserIcon;
