'use client'
import React from 'react'
import cardThumbnail from "@/public/frame-1261154708@2x.png";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay,Pagination,Thumbs ,FreeMode} from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css";
import { EffectCreative } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/pagination";

function GhallerySwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState('');

  return (
    <>
              <Swiper

spaceBetween={4}
navigation={true}
thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
modules={[FreeMode, Navigation, Thumbs]}
className="ghallery-swp-2"
>

     
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
        

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
<SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{width:'100% !important'}}>
            <div className="ghallery-image-box">
            <Image src={cardThumbnail} alt="image" height={550} className="ghallery-slide-image"/>
            </div>
          </SwiperSlide>
</Swiper>
    </>
  )
}

export default GhallerySwiper