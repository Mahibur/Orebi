import React from "react"

const SectionHead =({text,className})=>{
    return(
        <h3 className={`font-head text-lg md:text-[39px] font-bold text-head pb-12 capitalize ${className}`}>{text}</h3>
    )
};
export default SectionHead;