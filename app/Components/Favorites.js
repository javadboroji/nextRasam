"use client";
import React from 'react'
import like from "@/public/Heart, Favorite, Love.svg";
import comment from "@/public/chat-message-1.svg";
import Link from "next/link";
import Image from "next/image";
import arrow from '@/public/Arrow, left.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderPosts from './SliderPosts';
function Favorites({title ,favorites ,singleBasUrl}) {
  return (
    <div className='favorites mt-5'>
        <div className='container'>
            <h3 className='pb-5'>{title} </h3>
              <SliderPosts posts={favorites}/>
        </div>
    </div>
  )
}

export default Favorites