"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import banner from "@/public/banner-bg.svg";
import Image from "next/image";
function BannerHome() {
  return (
    <div className="banner-main d-flex justify-content-center position-absolut">
      <div className="banner-content  d-flex align-items-center">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          className="mySwiper swiper-banner"
          navigation
          // loop={true}
          // autoplay={{
          //   delay: 1000, 
          //   disableOnInteraction: false,
          //   stopOnLastSlide: false,
          // }}
        >
          <SwiperSlide className="slider-banner">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className=" d-flex flex-column ">
                    <h3 className="title typed-out"> فلکسوگرافی رسام نقش </h3>
                    <p className="sub-title">
                      {" "}
                      تولید کننده انواع کلیشه های ژلاتینی (دیجیتال){" "}
                    </p>
                    <span className="description">
                      شرکت رسام نقش آناهیتا در سال ۱۴۰۰ در کیلومتر ۲۵ جاده مخصوص
                      کرج‌‌ تاسیس و راه اندازی شد. این مجموعه با توانایی تولید
                      کلیشه های لیزری برای انواع صنایع تولید چاپ فلکسو توانسته
                      است تجربه و تخصص را در کنار سرعت و کیفیت در اختیار مشتریان
                      خود قرار دهد. محصولات ما در انواع چاپ های فلکسو از جمله
                      Wide web , Mide web , Narrow web و چاپهای High graphics
                      corrugated قابل مصرف است.
                    </span>
                    <button type="button" className=" btn-blue-gradient">
                      <Link
                        href={"https://formafzar.com/RhtudQdy6L/formLogin/3"}
                      >
                        {" "}
                        ثبت سفارش{" "}
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BannerHome;
