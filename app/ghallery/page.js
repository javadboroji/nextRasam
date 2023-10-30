"use client";

import React from "react";
import HeaderCustome from "../Components/HeaderCustome";
import FooterCustom from "../Components/FooterCustom";
import { useState, useRef, useCallback } from "react";
import cardThumbnail from "@/public/frame-1261154708@2x.png";

import Link from "next/link";
import Image from "next/image";
import "../custome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay,Pagination,Thumbs ,FreeMode} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import { EffectCreative } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/pagination";
import BreadcrumbCustom from "../Components/BreadcrumbCustom";
function Ghallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState('');

  const [ghallery, setGhallery] = useState([
    {image:cardThumbnail ,id:"g-1"},
    {image:cardThumbnail ,id:"g-2"},
    {image:cardThumbnail ,id:"g-3"},
    {image:cardThumbnail ,id:"g-4"},
    {image:cardThumbnail ,id:"g-5"},
  ]);
  return (
    <>
      <HeaderCustome />
   
      <div className="ghallery">
        <BreadcrumbCustom />
        <div className="container">
          <div className="breadcrumb"></div>
          <h1> گالری تصاویر</h1>
          <Swiper

        spaceBetween={4}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="ghallery-swp-2"
      >
        {ghallery &&
              ghallery.map((item, i) => {
                return (
                  <SwiperSlide key={item.id} style={{width:'100% !important'}}>
                    <div className="ghallery-image-box">
                    <Image src={item.image} alt="image" height={550} className="ghallery-slide-image"/>
                    </div>
                  </SwiperSlide>
                );
              })}
      </Swiper>

      <Swiper
         onSwiper={setThumbsSwiper}
         spaceBetween={10}
         slidesPerView={4}
         freeMode={true}
         watchSlidesProgress={true}
         modules={[FreeMode, Navigation, Thumbs]}
         className="mySwiper ghallery-swp"
         style={{marginTop:'1rem'}}
      >
        {ghallery &&
              ghallery.map((item, i) => {
                return (
                  <SwiperSlide key={item.id}>
                      <Image src={item.image} alt="image" style={{height:'150px'}}/>
                  </SwiperSlide>
                );
              })}
      </Swiper>










        </div>
      </div>
      <FooterCustom />
    </>
  );
}

export default Ghallery;
