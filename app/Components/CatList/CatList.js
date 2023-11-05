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
function CatList() {

/**==============================================
 *                pagnation state
 *  
 *  
 *  
 *  
 *=============================================**/
  const itemsPerPage = 4;
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
  
  const api = `http://192.168.3.17:82/api/v1/Articles/GetArticleInCategoryAndTag?pageIndex=${currentPage}&pageSize=${itemsPerPage}&categoryId=${search}`;
  useEffect(() => {
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        setError(err);
      });
      AOS.init();
      AOS.refresh();
  }, [search ,currentPage]);

useEffect(() => {
  setCurrentPage(1)
}, [search])



  return (
    <>
      {data &&
        data.data.map((post) => {
          return (
            <div className="col-12 col-lg-4 mb-3" key={post.newsId}  data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
              <div className="article-card d-flex flex-column category ">
                <div className="thumbnail">
                  <ImageBas64 url={post.imageFile} />
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
                  <p className="title ">{post.title}</p>
                  <span className="description card-description">
                    {post.shortTitle}
                  </span>
                  <Link
                    href={{
                      pathname: `categoryes/${post.newsId}`,
                      query: { name: post.title },
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
        })}
      {data&&<PagenatinCustom data={data.data} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
    </>
  );
}

export default CatList;
