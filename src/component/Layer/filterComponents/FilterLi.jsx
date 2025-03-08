import React from "react";
import { Link } from "react-router-dom";
const FilterLi = ({ title }) => {
  return (
    <Link className="font-head text-sm text-body hover:font-bold hover:text-head transition-all">
      {title}
    </Link>
  );
};
export default FilterLi;
