import React from "react"
import Container from "./Layer/Container"
import ads_2 from "/ads_2.jpg"
const AdsSection =()=>{
    return(
        <section className="ads pb-5 md:pb-32">
            <Container>
                <img className="w-full" src={ads_2} alt="ads.jpg" />
            </Container>
        </section>
    )
}
export default AdsSection