import React from "react";
import ProductName from "./ProductName";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const ArrivalCart = ({ src, productName, price, color="black" }) => {
  return (
    <div className="arrival-item max-w-[370px] group">
      <div className="img h-[394px] relative">
        <img className="object-cover" src={src} alt="arrival_product.jpg" />
        <div className="overlay absolute bottom-0 left-0 w-full bg-white py-6 pr-[30px] opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="items flex flex-col gap-y-3.5 items-end">
                <div className="item flex items-center gap-x-4 cursor-pointer">
                    <h3 className="font-head text-base text-body hover:font-bold hover:text-head transition-all duration-200">Add to Wish List</h3>
                    <FaHeart />
                </div>
                <div className="item group flex items-center gap-x-4 cursor-pointer">
                    <h3 className="font-head text-base text-body hover:font-bold hover:text-head transition-all duration-200">Compare</h3>
                    <FaCodeCompare />
                </div>
                <div className="item group flex items-center gap-x-4 cursor-pointer">
                    <h3 className="font-head text-base text-body hover:font-bold hover:text-head transition-all duration-200">Add to Cart</h3>
                    <FaShoppingCart />
                </div>
            </div>
        </div>
      </div>
      <div className="text pt-6">
        <div className="items-price flex justify-between items-center pb-[15px]">
          <ProductName text={productName} />
          <h5 className="font-head text-base text-body leading-[30px]">
            {price}
          </h5>
        </div>
        <h4 className="color font-head text-base text-body leading-[30px] capitalize">{color}</h4>
      </div>
    </div>
  );
};
export default ArrivalCart;
