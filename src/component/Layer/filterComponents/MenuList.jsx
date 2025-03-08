import React from "react"

const MenuList =({title,children})=>{
    return(
        <ul className="flex flex-col items-center">
                <h2 className="font-head text-base font-bold text-head pb-5 inline-block">{title}</h2>
                <div className="flex flex-col gap-y-3">
                {children}
                </div>
            </ul>
    )
}
export default MenuList