"use client";
import React,{useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import AOS from "aos";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import Image from "next/image";
//icon
import setting from "@/public/setting.svg";
import kodak from "@/public/kodak.svg";
import mos from "@/public/mos.svg";
import xsys from "@/public/xsys.svg";
import ai from "@/public/ai.svg";
import photoshop from "@/public/photoshop.svg";
import circle from "@/public/circle.svg";
import esko from "@/public/esko.svg";
import dupont from "@/public/dupont.svg";

function OurTool() {
  const list = [setting, kodak, mos, xsys, ai, photoshop, circle,dupont,esko];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="our-tool">
      <div className="container">
        <h3 className="title whay-title" id="animation-our-tool"> ابزارهای ما </h3>
        <span className="description">
          تیم رسام همواره تلاش نموده تا از بروز ترین و با کیفیت ترین ابزار ها در
          راستای بر طرف نمودن نیاز مشتریان استفاده کند.
        </span>

        <div className="swiper-box">
          <Swiper
            spaceBetween={15}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 1000, 
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper ourTool"
          >
            {list &&
              list.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="slider-parent">
                      <div className="our-tool-img-box">
                        <Image
                          src={item}
                          width={500}
                          height={500}
                          alt="image"
                        />
                      </div>
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
