"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation,Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/swiper-bundle.css';
import Image from "next/image";
//icon
import setting from "@/public/setting.svg";
import kodak from "@/public/kodak.svg";
import mos from "@/public/mos.svg";
import xsys from "@/public/xsys.svg";
import ai from "@/public/ai.svg";
import photoshop from "@/public/photoshop.svg";
import circle from "@/public/circle.svg"
function OurTool() {
  const [list, setList] = useState([setting, kodak, mos, xsys, ai, photoshop,circle]);
  return (
    <div className="our-tool">
      <div className="container">
        <h3 className="title whay-title"> ابزارهای ما </h3>
        <span className="description">
          تیم رسام همواره تلاش نموده تا از بروز ترین و با کیفیت ترین ابزار ها در
          راستای بر طرف نمودن نیاز مشتریان استفاده کند.
        </span>

        <div className="swiper-box">
          <Swiper
            spaceBetween={30}
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 1000, // 2 seconds
              }}
              modules={[Navigation,Autoplay,]}
              
            
            className="mySwiper"
          >
            {list &&
              list.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="our-tool-img-box">
                      <Image src={item} alt="image" />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default OurTool;
