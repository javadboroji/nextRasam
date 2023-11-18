"use client";
import React, { useEffect } from "react";
import useSWR from "swr";

export function getVideo() {
  const fetcher = async () => {
    const res = await fetch("http://192.168.3.17:82/api/v1/Video");
    const { data } = await res.json();
    return data;
  };
  const { data, error } = useSWR("api/video", fetcher, {
    revalidateOnFocus: false,
  });
  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
function VideoList() {
  const { data, error, isLoading } = getVideo();

  if (isLoading) {
    return <p> درحال بارگزاری ....</p>;
  }
  if (error) {
    return <p> خطا ....</p>;
  }

  console.log(data?.rows);

  return (
    <div className="container ">
      <div className="row  ">
        {data.rows.map((video) => {
          return (
            <div className="col-12 col-lg-4 mb-3 video-hover" key={video.Id}>
              <div className="video-box"><div dangerouslySetInnerHTML={{ __html: video.embeddedUrl }} /></div>
              <p className="video-title">{video.Title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VideoList;
