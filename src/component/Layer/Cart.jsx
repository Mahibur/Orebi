import React from "react"
import { IoIosClose } from "react-icons/io"

const Cart =({image,title,price})=>{
    return(
        <div className="cart bg-[#F5F5F3] flex gap-x-5 p-5">
            <picture className="w-20 h-20">
                <img className="object-cover" src={image} alt={image} />
            </picture>
            <div className="text-icon flex gap-x-6 items-center">
                <div className="text">
                    <h4 className="font-head text-head text-sm font-bold pb-3">{title}</h4>
                    <p className="font-head text-head text-sm font-bold">{price}</p>
                </div>
                <div className="icon">
                <IoIosClose className="w-6 h-6 font-black" />
                </div>
            </div>
        </div>
    )
}
export default Cart