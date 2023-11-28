
import React, {  } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://185.103.129.113:80/api/v1/Video",{cache: 'no-store' });
  if(!res.ok){
    throw new Error('Failed to fetch data lats Article')
  }
  return res.json()
};

 

async function VideoList() {
  const  data  =await fetcher();
  return (
    <div className="container ">
      <div className="row  ">
        {data?.data?.rows.map((video) => {
          
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
