import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";
import SliderPosts from "./SliderPosts";
const getLastArticle =async()=>{
  const api ='http://192.168.3.17:82/api/v1/Articles/GetLatestArticles'
  const res =await fetch(api,{cache: 'no-store' })
  if(!res.ok){
    throw new Error('Failed to fetch data lats Article')
  }
  return res.json()
}

async function LatestArticles() {
  const cards =await getLastArticle()

  return (
    <div className="last-article advantage">

      <div className="container">
      <h3 className="whay-title text-center"> آخرین مقالات</h3>
      {
      <SliderPosts posts={cards} categorey={'categoryes'}/>
      }
  
    </div>  

    

    </div>
  );
}

export default LatestArticles;
