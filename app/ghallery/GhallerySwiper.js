"use client";
import React from "react";
import cardThumbnail from "@/public/frame-1261154708@2x.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Autoplay,
  Pagination
} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function GhallerySwiper() {

  return (
    <>
      <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation ,Pagination,EffectCoverflow]}
        className="mySwiper ghallery-swp-2"
      >
        <SwiperSlide >
          <div className="ghallery-image-box">
            <Image
              src={cardThumbnail}
              alt="image"
       
              style={{objectFit:'cover'}}
              className="ghallery-slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="ghallery-image-box">
            <Image
              src={cardThumbnail}
              alt="image"
       
              style={{objectFit:'cover'}}
              className="ghallery-slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="ghallery-image-box">
            <Image
              src={cardThumbnail}
              alt="image"
       
              style={{objectFit:'cover'}}
              className="ghallery-slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="ghallery-image-box">
            <Image
              src={cardThumbnail}
              alt="image"
       
              style={{objectFit:'cover'}}
              className="ghallery-slide-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="ghallery-image-box">
            <Image
              src={cardThumbnail}
              alt="image"
       
              style={{objectFit:'cover'}}
              className="ghallery-slide-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default GhallerySwiper;
