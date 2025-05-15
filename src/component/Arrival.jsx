import React from "react"
import Container from "./Layer/Container"
import SectionHead from "./Layer/SectionHead"
import ArrivalCart from "./Layer/ArrivalCart"
import Arrival_1 from "/arrival_1.jpg"

const Arrival =()=>{
    return(
        <section className="arrival">
            <Container>
                <SectionHead text="new arrival" />
                <div className="arrival-main">
                    <ArrivalCart src={Arrival_1} productName={`Basic Crew Neck Tee`} price={`$44.00`}/>
                </div>
            </Container>
        </section>
    )
}
export default Arrival