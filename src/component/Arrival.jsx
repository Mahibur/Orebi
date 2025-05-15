import React from "react"
import Container from "./Layer/Container"
import SectionHead from "./Layer/SectionHead"
import ArrivalCart from "./Layer/ArrivalCart"
import Arrival_1 from "/arrival_1.jpg"
import Arrival_2 from "/arrival_2.jpg"
import Arrival_3 from "/arrival_3.jpg"
import Arrival_4 from "/arrival_4.jpg"

const Arrival =()=>{
    return(
        <section className="arrival">
            <Container>
                <SectionHead text="new arrival" />
                <div className="arrival-main flex flex-wrap items-center gap-x-10">
                    <ArrivalCart src={Arrival_1} productName={`Basic Crew Neck Tee`} price={`$44.00`} btnText="10%"/>
                    <ArrivalCart src={Arrival_2} productName={`Basic Crew Neck Tee`} price={`$44.00`}/>
                    <ArrivalCart src={Arrival_3} productName={`Basic Crew Neck Tee`} price={`$44.00`}/>
                    <ArrivalCart src={Arrival_4} productName={`Basic Crew Neck Tee`} price={`$44.00`}/>
                </div>
            </Container>
        </section>
    )
}
export default Arrival