import React from "react";
import { Link } from "react-router-dom";

const Image = ({ href, src, className, imgclass }) => {
  return (
    <Link className={`${className}`} to={href}>
      <picture>
        <img className={`block ${imgclass}`} src={src} alt={src} />
      </picture>
    </Link>
  );
};

export default Image;
