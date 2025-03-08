import React from "react";

const HoverMenu = ({ children, className }) => {
  return (
    <div
      className={`flex gap-x-12 absolute left-full top-0 h-full w-[570px] pt-7 pb-8 pl-10 pr-12 bg-white invisible group-hover:visible transition-all ${className}`}
    >
      {children}
    </div>
  );
};
export default HoverMenu;
