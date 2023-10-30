
import React from "react";
import { use } from "react";
import BreadcrumbCustom from "@/app/Components/BreadcrumbCustom";
import FooterCustom from "@/app/Components/FooterCustom";
import HeaderCustome from "@/app/Components/HeaderCustome";
import "../../custome.css";
import Comments from "@/app/Components/Comments";
import SingleTitle from "@/app/Components/SingleTitle";
import Tags from "@/app/Components/Tags";
import SimilarContent from "@/app/Components/SimilarContent";
import ImageBas64 from "@/app/Components/ImageBas64/ImageBas64";
import CommentList from "@/app/Components/CommentList/CommentList";

const  getSigleData =async(id)=>{
  const api =`http://185.103.129.114:82/api/v1/Articles/GetArticleDetails?articleId=${id}`
const res =await fetch(api,{cache: 'no-store' })
if(!res.ok){
  throw new Error('Failed to fetch data lats Article')
}

return res.json()
}
 function page({ params }) {
  console.log(params);
  const {data} = use(getSigleData(params.id))
  return (
    <>
      <HeaderCustome />
      <div className="training">
        <div className="single-content mt-5">
          <BreadcrumbCustom title={data.news.Title}/>
        </div>
        <div className="container">
          <div className="singleThumbnail-box">
          <ImageBas64 url={data.news.imageFile} classCustom={'singleThumbnail'}/>
          </div>
        </div>
        {/* Title */}
        <SingleTitle title={data.news.Title} date={data.news.PersianPublishDate} time={data.news.persianPublishTime} />
     
        {/* Content */}
        <div className="container">
          <div className="single-content" dangerouslySetInnerHTML={{ __html: data.news.Description }}>
          </div>
        </div>
        {/* Tags */}
        <Tags
          tags={data.news.tagNamesList}
          countLike={data.news.NumberOfLike}
          countComment={data.news.NumberOfComments}
        />
         {/*  comments */}
         <Comments />
      {/* comment List */}
      <CommentList comments={data.comments}/>
       

          {/* simlar  */}
          <SimilarContent title={'مطالب مشابه '}/>
        <FooterCustom />
      </div>
    </>
  );
}

export default page;
