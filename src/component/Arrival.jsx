import React, { useRef } from "react";
import Container from "./Layer/Container";
import SectionHead from "./Layer/SectionHead";
import ArrivalCart from "./Layer/ArrivalCart";
import Arrival_1 from "/arrival_1.jpg";
import Arrival_2 from "/arrival_2.jpg";
import Arrival_3 from "/arrival_3.jpg";
import Arrival_4 from "/arrival_4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SimplePrevArrow = ({onClick}) => {
  return (
    <button
      className="absolute left-0 top-[40%] translate-x-1/5 -translate-y-1/2 z-10 bg-black/20 text-white p-4 md:p-6 rounded-[50%]"
      onClick={onClick}
    >
     <FaLongArrowAltLeft className="text-base md:text-lg"/>
    </button>
  );
};
const SimpleNextArrow = ({onClick}) => {
  return (
     <button
    className="absolute right-0 top-[40%] -translate-x-1/5 md:-translate-x-1/2 -translate-y-1/2 z-10 bg-black/20 text-white p-4 md:p-6 rounded-[50%]"
    onClick={onClick}
  >
     <FaLongArrowAltRight className="text-base md:text-lg"/>
  </button>
  );
};

const Arrival = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="arrival">
      <Container>
        <SectionHead text="new arrival" />
        <div className="arrival-main relative">
          <Slider {...settings}>
            <ArrivalCart
              src={Arrival_1}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
              btnText="10%"
            />
            <ArrivalCart
              src={Arrival_2}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
            />
            <ArrivalCart
              src={Arrival_3}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
            />
            <ArrivalCart
              src={Arrival_4}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
            />
            <ArrivalCart
              src={Arrival_1}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
              btnText="10%"
            />
            <ArrivalCart
              src={Arrival_2}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
            />
            <ArrivalCart
              src={Arrival_3}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
            />
            <ArrivalCart
              src={Arrival_4}
              productName={`Basic Crew Neck Tee`}
              price={`$44.00`}
            />
          </Slider>
        </div>
      </Container>
    </section>
  );
};
export default Arrival;
