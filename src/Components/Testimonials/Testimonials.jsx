import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonials = () => {
 const clients = [
    {
      img: profilepic1,
      review:
        "In this Reactjs project we will make an awesome responsive personal portfolio website step-by-step",
    },
    {
        img: profilepic2,
        review:
          "In this Reactjs project we will make an awesome responsive personal portfolio website step-by-step",
      },
      {
        img: profilepic3,
        review:
          "In this Reactjs project we will make an awesome responsive personal portfolio website step-by-step",
      },
      {
        img: profilepic4,
        review:
          "In this Reactjs project we will make an awesome responsive personal portfolio website step-by-step",
      },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}
      
      >
        {clients.map((client,index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                    </div>
                </SwiperSlide>
            )
        })}
        
      </Swiper>
    </div>
  );
};

export default Testimonials;
