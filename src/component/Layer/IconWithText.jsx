import React from "react";

const IconWithText = ({ src, text, className }) => {
  return (
    <div className="icon-text flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-1 md:gap-y-0">
      <div className="img">
        <img className={`md:w-full ${className}`} src={src} alt="icon.png" />
      </div>
      <div className="text">
        <h4 className="font-head text-[12px] md:text-base text-third">
          {text}
        </h4>
      </div>
    </div>
  );
};
export default IconWithText;
