import React from "react";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import FooterCustom from "@/app/Components/FooterCustom";
import HeaderCustome from "@/app/Components/HeaderCustome";
import "@/app/custome.css";
import SingleTitle from "@/app/Components/SingleTitle";
import Tags from "@/app/Components/Tags";
import SimilarContent from "@/app/Components/SimilarContent";
import ImageBas64 from "@/app/Components/ImageBas64/ImageBas64";
import CommentList from "@/app/Components/CommentList/CommentList";
import DarkMod from "@/app/Components/DarkMod";
import LayoutPage from "@/app/Components/LayoutPage";
const BreadcrumbCustom = dynamic(
  () => import("@/app/Components/BreadcrumbCustom"),
  { ssr: false }
);
const Comments = dynamic(() => import("@/app/Components/Comments"), {
  ssr: false,
});

const getSigleData = async (id) => {
  const api = `http://185.103.129.113:82/api/v1/Articles/GetArticleDetails?articleId=${id}`;
  const res = await fetch(api, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data lats Article");
  }

  return res.json();
};
export default async function page({ params, searchParams }) {
  let data = null;
  if (params.id) {
    data = await getSigleData(params.id);
  }
  const categoryId = searchParams.catId;

  return (
    <>
      <LayoutPage>
        <div className="training">
          <div className="single-content mt-5">
            <BreadcrumbCustom title={data.data?.news.ShortTitle} />
          </div>
          <div className="container">
            <div className="singleThumbnail-box">
              <ImageBas64
                url={data.data?.news.imageFile}
                classCustom={"singleThumbnail"}
              />
            </div>
          </div>
          {/* Title */}
          <SingleTitle
            title={data.data?.news.Title}
            date={data.data?.news.PersianPublishDate}
            time={data.data?.news.persianPublishTime}
          />

          {/* Content */}
          <div className="container">
            <div
              className="single-content"
              dangerouslySetInnerHTML={{ __html: data.data.news.Description }}
            ></div>
          </div>
          {/* Tags */}
          <Tags
            tags={data.data?.news.tagNamesList}
            countLike={data.data?.news.NumberOfLike}
            countComment={data.data?.news.NumberOfComments}
          />
          {/*  comments */}
          <Comments />
          {/* comment List */}
          {data.data?.comments.length > 0 && (
            <CommentList comments={data.data?.comments} />
          )}

          {/* simlar  */}
          <SimilarContent
            title={"مطالب مشابه "}
            catId={categoryId}
            similr={true}
            postId={params.id}
          />
        </div>
      </LayoutPage>
    </>
  );
}
