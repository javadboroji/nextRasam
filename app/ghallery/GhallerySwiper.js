"use client";
import React from "react";
import cardThumbnail from "@/public/frame-1261154708@2x.png";
import img1 from "@/public/img1.png"
import img2 from "@/public/img2.png"
import img3 from "@/public/img3.png"
import img4 from "@/public/img4.png"
import img7 from "@/public/img7.png"
import img6 from "@/public/img1.png"
import img8 from "@/public/img8.png"
import img9 from "@/public/img9.png"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function GhallerySwiper() {
  return (
    <>


      <div className="ghallery-grid">
        <div className=" box-ghallery">
         
            <Image
                  src={cardThumbnail}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
          
        </div>
        <div className=" box-ghallery">

            <Image
                  src={img2}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
        </div>
        <div className=" box-ghallery">
            <Image
                  src={img1}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
        </div>
        <div className=" box-ghallery">
            <Image
                  src={img9}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
        </div>
        <div className=" box-ghallery">
            <Image
                  src={img8}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
        </div>
        <div className=" box-ghallery">
            <Image
                  src={img7}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
        </div>
        <div className=" box-ghallery">
            <Image
                  src={img6}
                  alt="image"
                  style={{ objectFit: "cover",width:'100%',height:"100%" }}
                  className="ghallery-slide-image"
                />
        </div>
   
      </div>
    </>
  );
}

export default GhallerySwiper;
