import React from "react"

const ProductName =({text,className})=>{
    return(
        <h4 className={`font-head font-bold text-lg md:text-xl text-head capitalize ${className}`}>{text}</h4>
    )
}
export default ProductName