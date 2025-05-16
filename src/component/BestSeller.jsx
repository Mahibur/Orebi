import React from "react";
import Container from "./Layer/Container";
import SectionHead from "./Layer/SectionHead";
import ArrivalCart from "./Layer/ArrivalCart";
import best_1 from "/best_1.jpg"
import best_2 from "/best_2.jpg"
import best_3 from "/best_3.jpg"
import best_4 from "/best_4.jpg"

const BestSeller = () => {
  return (
    <div className="best_seller py-16 md:py-32">
      <Container>
        <SectionHead text={`our best sales`} />
        <div className="best-items-main flex flex-wrap gap-y-3 md:gap-y-0 justify-center md:justify-between items-center">
          <ArrivalCart
            src={best_1}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
          <ArrivalCart
            src={best_2}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
          <ArrivalCart
            src={best_3}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
          <ArrivalCart
            src={best_4}
            productName={`Basic Crew Neck Tee`}
            price={`$44.00`}
          />
        </div>
      </Container>
    </div>
  );
};
export default BestSeller;
