import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./Layer/Image";
import banner_01 from "/banner_01.jpg"
import banner_02 from "/banner_02.jpg"
const Banner =()=>{

  const settings = {
    dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          display:"inline",
          backgroundColor: "red",
          position: "absolute",
          left: "50px",
          top: "50%",
          transform:"translateY(-50%)",

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
    return(
        <Slider {...settings}>
        <Image imgclass="w-full" src={banner_01}/>
        <Image imgclass="w-full" src={banner_02}/>
        
      </Slider>
      
    )
}
export default Banner