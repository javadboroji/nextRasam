"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import AOS from "aos";

import "swiper/css/navigation";
import "swiper/css/pagination";
import like from "@/public/Heart, Favorite, Love.svg";
import comment from "@/public/chat-message-1.svg";
import Link from "next/link";
import arrow from "@/public/Arrow, left.svg";
import Image from "next/image";
import ImageBas64 from "./ImageBas64/ImageBas64";
function SliderPosts({ posts, categorey, similr, notShowPost }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  if (!similr) {
    return (
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper last-article swiper-custome"
        navigation
        pagination={true}
        style={{ paddingBottom: "2rem" }}
      >
        {posts.data &&
          posts.data.map((item) => {
            return (
              <SwiperSlide
                key={item.Id}
                className="article-swiper-slide"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                
                  
                    <div className="article-card d-flex flex-column ">
                      <div className="thumbnail">
                      <Link
                    href={{
                      pathname: `${categorey}/${item.Id}`,
                      query: { name: item.Title, catId: item.CategoryId },
                    }}
                  >
                        <ImageBas64 url={item.imageFile} />
                        </Link>
                      </div>
                      <div className="article-card-info">
                        <div className="d-flex justify-content-between  py-1">
                          <span className="date">
                            {" "}
                            {item.PersianPublishDate}
                          </span>
                          <div className="d-flex">
                            <span className="like-count">
                              {item.NumberOfLike}
                            </span>
                            <Image src={like} alt="like " className="ms-3" />
                            <span className="comment-count">
                              {item.NumberOfComments}
                            </span>
                            <Image src={comment} alt="comment" />
                          </div>
                        </div>
                        <p className="title ">{item.ShortTitle}</p>
                        <span className="description card-description">
                          {item.abstract}
                        </span>
                        <div className="d-flex justify-content-between align-items-baseline">
                          <span className="baget-post">
                            {item.NameOfCategories}
                          </span>
                          <Link
                            href={{
                              pathname: `${categorey}/${item.Id}`,
                              query: {
                                name: item.Title,
                                catId: item.CategoryId,
                              },
                            }}
                            className="card-more-link"
                          >
                            ادامه مطلب
                            <Image src={arrow} alt="arrow" />
                          </Link>
                        </div>
                      </div>
                    </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    );
  } else {
    return (
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper last-article swiper-custome"
        navigation
        pagination={true}
        style={{ paddingBottom: "2rem" }}
      >
        {posts &&
          posts.map((item) => {
            if (notShowPost !== item.newsId) {
              return (
                <SwiperSlide
                  key={item.newsId}
                  className="article-swiper-slide"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                      <div className="article-card d-flex flex-column ">
                        <div className="thumbnail">
                        <Link
                      href={{
                        pathname: `/${categorey}/${item.newsId}`,
                        query: { name: item.title, catId: item.categoryId },
                      }}
                    >
                          <ImageBas64 url={item.imageFile} />
                          </Link>
                        </div>
                        <div className="article-card-info">
                          <div className="d-flex justify-content-between  py-1">
                            <span className="date">
                              {" "}
                              {item.persianPublishDate}
                            </span>
                            <div className="d-flex">
                              <span className="like-count">
                                {item.numberOfLike}
                              </span>
                              <Image src={like} alt="like " className="ms-3" />
                              <span className="comment-count">
                                {item.numberOfComments}
                              </span>
                              <Image src={comment} alt="comment" />
                            </div>
                          </div>
                          <p className="title ">{item.shortTitle}</p>
                          <span className="description card-description">
                            {item.abstract}
                          </span>
                          <div className="d-flex justify-content-between align-items-baseline">
                            <span className="baget-post">
                              {item.nameOfCategories}
                            </span>
                            <Link
                              href={{
                                pathname: `/${categorey}/${item.newsId}`,
                                query: {
                                  name: item.title,
                                  catId: item.categoryId,
                                },
                              }}
                              className="card-more-link"
                            >
                              ادامه مطلب
                              <Image src={arrow} alt="arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>                  
                </SwiperSlide>
              );
            }
          })}
      </Swiper>
    );
  }
}

export default SliderPosts;
