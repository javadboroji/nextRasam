"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import cardThumbnail from "@/public/frame-1261154708@2x.png";
import like from "@/public/Heart, Favorite, Love.svg";
import comment from "@/public/chat-message-1.svg";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css";
import arrow from "@/public/Arrow, left.svg";
import search from "@/public/search-loupe.svg";
import "swiper/css/navigation";
import "swiper/css/pagination";
function CategoryItems({ title, posts, categoryes,singleBasUrl }) {
  return (
    <div className="container category mt-3 mt-lg-5">
      <h2 className="pb-3 d-none d-lg-block"> {title}</h2>
      <div className="row">
        <div className="col-12 col-lg-9 order-1 order-lg-0">
          <div className="row">
            {posts &&
              posts.map((item, i) => {
                return (
                  <div className="col-12 col-lg-4 mb-3" key={i}>
                    <div className="article-card d-flex flex-column category ">
                      <div className="thumbnail">
                        <Image src={item.image} alt="image" />
                      </div>
                      <div className="article-card-info">
                        <div className="d-flex justify-content-between  py-1">
                          <span className="date"> {item.date}</span>
                          <div className="d-flex">
                            <span className="like-count">{item.like}</span>
                            <Image src={like} alt="like " className="ms-3" />
                            <span className="comment-count">
                              {item.comment}
                            </span>
                            <Image src={comment} alt="comment" />
                          </div>
                        </div>
                        <p className="title ">{item.title}</p>
                        <span className="description card-description">
                          {item.description}
                        </span>
                        <Link href={`${singleBasUrl}/${item.id}`} className="card-more-link">
                          ادامه مطلب
                          <Image src={arrow} alt="arrow" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-12 col-lg-3 order-0 order-lg-1">
          <div className="category-search">
            <input placeholder="جستجو" type="text" />
            <Image src={search} alt="search " />
          </div>
          <div className="category-cat">
          <h2 className="pb-3 d-block d-lg-none"> {title}</h2>
            <p> دسته بندی ها</p>
            <ul>
              {categoryes ? (
                categoryes.map((cat)=>{return(
                    <li key={cat.id}>
                    <Link href='/'> { cat.title}</Link>

                    <span> {cat.count}</span>
                  </li>
                )})
               
              ) : (
                "موردی یافت نشد"
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryItems;
