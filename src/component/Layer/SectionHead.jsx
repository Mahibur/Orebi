import React from "react"

const SectionHead =({text,className})=>{
    return(
        <h3 className={`font-head text-xl md:text-[39px] font-bold text-head pb-6 md:pb-12 capitalize ${className}`}>{text}</h3>
    )
};
export default SectionHead;