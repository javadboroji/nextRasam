
import React from "react";
import SliderPosts from "./SliderPosts";
import cardThumbnail from '@/public/frame-1261154708@2x.png';
import { use } from "react";

const getSimilrData =async(id)=>{
  const api =`http://185.103.129.113:80/api/v1/Articles/GetArticleInCategoryAndTag?pageIndex=1&pageSize=10&categoryId=${id}`
const res =await fetch(api,{cache: 'no-store' })
if(!res.ok){
  throw new Error('Failed to fetch data lats Article')
}

return res.json()
}

function SimilarContent({ title ,catId,postId}) {
  const {data} = use(getSimilrData(catId));
  return (
    <div className="similar">
      <div className="container">
        <p>{title}</p>
        <SliderPosts posts={data} categorey={"categoryes"} similr={true} notShowPost={postId}/>
      </div>
    </div>
  );
}

export default SimilarContent;
