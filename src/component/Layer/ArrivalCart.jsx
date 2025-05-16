import React from "react";
import ProductName from "./ProductName";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const ArrivalCart = ({ src, productName, price, color="black",btnText="New" }) => {
  return (
    <div className="arrival-item max-w-[370px]">
      <div className="img md:h-[394px] relative group">
        <img className="object-cover" src={src} alt="arrival_product.jpg" />
        <div className="overlay absolute bottom-0 left-0 w-full bg-white/50 backdrop-blur-sm py-4 md:py-6 pr-4 md:pr-[30px] opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="items flex flex-col gap-y-2 md:gap-y-3.5 items-end">
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
        <button className="absolute top-[4%] left-[4%] font-head font-bold text-sm text-white py-2 px-8 bg-head">{btnText}</button>
      </div>
      <div className="text pt-3 md:pt-6">
        <div className="items-price flex justify-between items-center pb-0 md:pb-[15px]">
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
