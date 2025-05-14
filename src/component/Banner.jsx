import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./Layer/Image";
import banner_01 from "/banner_01.jpg"
import banner_02 from "/banner_02.jpg"
const Banner =()=>{

  const settings = {
    dots: false,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return(
        <Slider {...settings}>
        <Image imgclass="w-full" src={banner_01}/>
        <Image imgclass="w-full" src={banner_02}/>
      </Slider>
      
    )
}
export default Banner