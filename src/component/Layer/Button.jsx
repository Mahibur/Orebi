import React from "react"
import { Link } from "react-router-dom";
const Button =({className,text})=>{
    return(
       <button className={`py-4 w-full bg-[#2B2B2B] font-head font-bold text-sm ${className}`}>
        {text}
       </button>
    )
}
export default Button;