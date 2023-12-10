"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BASE_URL } from "@/app/envIndex";
import Loading from "../Components/Loading";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Link from "next/link";
import Image from "next/image";

export function Ghallery() {
  const baseUrl = BASE_URL;
  const api = `${baseUrl}/api/v1/Image/GetAllImage`;
  const fetcher = async () => {
    const res = await fetch(api);
    const { data } = await res.json();
    return data.rows;
  };
  const { data, error } = useSWR("ghallery", fetcher, {
    revalidateOnFocus: false,
  });
  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
function GhallerySwiper() {
  const baseUrl = BASE_URL;
  const { data, isLoading, error } = Ghallery();
  const bannerImage = data ? data[0].url : "";
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  if (isLoading) {
    return (
      <div className="pb-5">
        {" "}
        <Loading />{" "}
      </div>
    );
  }
  if (error) {
    return <p>خطایی رخ داده است .!</p>;
  }
  return (
    <>
      <div className="ghallery-grid">
       
          {data?.map((image, i) => {
            return (
              <div className=" box-ghallery" key={i}>
                <Link href={`http://192.168.3.17:82/posters/DSC08216.jpg`}   >
                  <img
                  
                    src={`${baseUrl}/${image.url}`}
                    alt={'image.url'}
                    className="ghallery-slide-image"
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default GhallerySwiper;
