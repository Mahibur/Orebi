import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "../Cart";
import Button from "../Button";

const CartPopUp = () => {
  let [pop, setPop] = useState(false);
  return (
    <div onClick={() => setPop(!pop)} className="right relative">
      <FaCartShopping  className="cursor-pointer"/>
      {pop && (
        <div className="main z-50 w-80 absolute top- right-0">
          <Cart image="" title="Black Smart Watch" price="$44.00" />
          <div className="total_btn pt-3 px-5 pb-5 bg-white">
            <p className="font-head text-base text-body pb-3.5">
              Subtotal:{" "}
              <span className="text-head font-semibold">{`$44.00`}</span>
            </p>
            <div className="button flex gap-x-5">
                <Button className="py-4 px-6 text-head bg-white border border-[#262626]" text="View Cart"/>
                <Button className="py-4 px-6 text-white" text="Checkout"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartPopUp;
