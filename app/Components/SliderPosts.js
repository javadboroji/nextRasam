"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import like from "@/public/Heart, Favorite, Love.svg";
import comment from "@/public/chat-message-1.svg";
import Link from "next/link";
import arrow from "@/public/Arrow, left.svg";
import Image from 'next/image';
import ImageBas64 from './ImageBas64/ImageBas64';
function SliderPosts({posts,categorey}) {

  return (
    <Swiper
    breakpoints={{
     768: {
       slidesPerView: 2,
     },
     991:{
         slidesPerView:4
     }
   }}
     spaceBetween={10}
     slidesPerView={1}
     modules={[Navigation, Autoplay,Pagination]}
     className="mySwiper last-article swiper-custome"
     navigation
     pagination={true} 
     style={{paddingBottom:'2rem'}}
   >
      {posts.data &&
       posts.data.map((item) => {
         return (
           <SwiperSlide key={item.Id} className="article-swiper-slide">
             <div className="article-card d-flex flex-column ">
               <div className="thumbnail">
                 <ImageBas64 url={item.imageFile}/>
               </div>
               <div className="article-card-info">
                 <div className="d-flex justify-content-between  py-1">
                   <span className="date"> {item.PersianPublishDate}</span>
                   <div className="d-flex">
                     <span className="like-count">{item.NumberOfLike}</span>
                     <Image src={like} alt="like " className="ms-3" />
                     <span className="comment-count">{item.NumberOfComments}</span>
                     <Image src={comment} alt="comment" />
                   </div>
                 </div>
                 <p className="title ">{item.Title}</p>
                 <span className="description card-description">
                   {item.ShortTitle}
                 </span>
                 {/* <Link href={{pathname:`${categorey}/${item.Id}` ,query:{object: JSON.stringify(item)}}} className="card-more-link">
                   ادامه مطلب
                   <Image src={arrow} alt="arrow"  />
                 </Link> */}
                 <Link href={{pathname:`${categorey}/${item.Id}` ,query:{name:item.Title}}}  className="card-more-link">
                   ادامه مطلب
                   <Image src={arrow} alt="arrow"  />
                 </Link>
               </div>
             </div>
           </SwiperSlide>
         );
       })}
 

   </Swiper>
  )
}

export default SliderPosts