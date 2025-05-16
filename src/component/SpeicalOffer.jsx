import React from "react";
import Container from "./Layer/Container";
import SectionHead from "./Layer/SectionHead";
import ArrivalCart from "./Layer/ArrivalCart";
import speical_1 from "/speical_1.jpg"
import speical_2 from "/speical_2.jpg"
import speical_3 from "/speical_3.jpg"
import speical_4 from "/speical_4.jpg"

const SpeicalOffer = () => {
  return (
    <div className="speical_offer py-16 md:py-32">
      <Container>
        <SectionHead text={`Special Offers`} />
        <div className="speical-items-main flex flex-wrap gap-y-3 md:gap-y-0 justify-center md:justify-between items-center">
          <ArrivalCart
            src={speical_1}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
          <ArrivalCart
            src={speical_2}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
          <ArrivalCart
            src={speical_3}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
          <ArrivalCart
            src={speical_4}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
        </div>
      </Container>
    </div>
  );
};
export default SpeicalOffer;
