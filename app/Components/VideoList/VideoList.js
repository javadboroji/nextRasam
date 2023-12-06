
import React, {  } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://webapp.rasamflexo.ir/api/v1/Video",{cache: 'no-store' });
  if(!res.ok){

    console.log("error");
    
  }
  return res.json()
};

 

async function VideoList() {
  const  data  =await fetcher();
    return (
      <div className="container ">
        <div className="row  ">
        {data?.data?.rows && data.data.rows.length > 0 ? (
        data.data.rows.map((video) => (
          <div className="col-12 col-lg-4 mb-3 video-hover" key={video.Id}>
            <div className="video-box">
              <div dangerouslySetInnerHTML={{ __html: video.embeddedUrl }} />
            </div>
            <p className="video-title">{video.Title}</p>
          </div>
        ))
      ) : (
        <div className="col-12">
          <p> ویدیویی وجود ندارد!  </p>
        </div>
      )}
        </div>
      </div>
    );
  
}

export default VideoList;
