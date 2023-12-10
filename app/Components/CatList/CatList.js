"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import like from "@/public/Heart, Favorite, Love.svg";
import arrow from "@/public/Arrow, left.svg";
import { useSearchParams } from "next/navigation";
import comment from "@/public/chat-message-1.svg";
import Link from "next/link";
import ImageBas64 from "@/app/Components/ImageBas64/ImageBas64";
import PagenatinCustom from "../PagenatinCustom/PagenatinCustom";
import AOS from "aos";
import Loading from "../Loading";
import { BASE_URL } from "@/app/envIndex";
function CatList() {

/**==============================================
 *                pagnation state
 *  
 *  
 *  
 *  
 *=============================================**/
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

/**==============================================
 *                data info
 *                 searchParams
 *                  state
 *                  api
 *  
 *=============================================**/  
  const [data, setData] = useState("");
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
 const [totalCount, setTotalCount] = useState(null)
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('')
 const baseUrl = BASE_URL;
  const api = `${baseUrl}/api/v1/Articles/GetArticleInCategoryAndTag?pageIndex=${currentPage}&pageSize=${itemsPerPage}&categoryId=${search}`;
  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setTotalCount(responseData.data[0].totalCount);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after fetching data (success or error)
      })
      AOS.init();
      AOS.refresh();
  }, [search ,currentPage]);
useEffect(() => {
  setCurrentPage(1);
}, [search])


if(loading){
  return <> <p > درحال بارگزاری...</p> <Loading/></>;
}

return (
  <>
  
    {data ?
      data.data.map((post) => {
        return (  
          <div className="col-12 col-lg-4 mb-3" key={post.newsId}  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" >
            <div className="article-card d-flex flex-column category ">
              <div className="thumbnail">
              <Link
                  href={{
                    pathname: `categoryes/${post.newsId}`,
                    query: { name: post.title ,catId:post.categoryId },
                  }}
                >
                <ImageBas64 url={post.imageFile} />
                </Link>
              </div>
              <div className="article-card-info">
                <div className="d-flex justify-content-between  py-1">
                  <span className="date"> {post.persianPublishDate}</span>
                  <div className="d-flex">
                    <span className="like-count">{post.numberOfLike}</span>
                    <Image src={like} alt="like " className="ms-3" />
                    <span className="comment-count">
                      {post.numberOfComments}
                    </span>
                    <Image src={comment} alt="comment" />
                  </div>
                </div>
                <p className="title ">{post.shortTitle}</p>
                <span className="description card-description">
                  {post.abstract}
                </span>
                <Link
                  href={{
                    pathname: `categoryes/${post.newsId}`,
                    query: { name: post.title ,catId:post.categoryId },
                  }}
                  className="card-more-link"
                >
                  ادامه مطلب
                  <Image src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
       
          </div>
        );
      }):<p className="mt-3"> موردی یافت نشد</p>}
    {data&&<PagenatinCustom data={data.data} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalCount}/>}
  </>
);
  
}

export default CatList;
