import React from "react"
import Container from "./Layer/Container"
import ad_1 from "/Ad_1.png"
import ad_2 from "/Ad_2.png"
import ad_3 from "/Ad_3.png"
import { useNavigate } from "react-router-dom"

const OfferSection =()=>{
    let navigate = useNavigate();
    return(
        <div className="offer py-5 md:py-0 md:pt-[174px] md:pb-32">
            <Container className="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
                <img onClick={()=>navigate("/shop")} className="row-span-2 w-full object-cover cursor-pointer" src={ad_1} alt="ad.png" />
                <img onClick={()=>navigate("/shop")} className="w-full object-cover cursor-pointer" src={ad_2} alt="ad.png" />
                <img onClick={()=>navigate("/shop")} className="w-full object-cover cursor-pointer" src={ad_3} alt="ad.png" />
            </Container>
        </div>
    )
}
export default OfferSection