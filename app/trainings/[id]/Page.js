"use client";

import React from "react";
import BreadcrumbCustom from "@/app/Components/BreadcrumbCustom";
import FooterCustom from "@/app/Components/FooterCustom";
import HeaderCustome from "@/app/Components/HeaderCustome";
import { useRouter } from "next/navigation";
import "../../custome.css";
import Comments from "@/app/Components/Comments";
import SingleTitle from "@/app/Components/SingleTitle";
import Tags from "@/app/Components/Tags";
import SimilarContent from "@/app/Components/SimilarContent";
function Page({ params }) {
  const router = useRouter();
  //const {id} =router.query;
  console.log(params.name);
  return (
    <>
      <HeaderCustome />
      <div className="training">
        <div className="single-content mt-5">
          <BreadcrumbCustom />
        </div>
        {/* Title */}
        <SingleTitle title={"تست "} date={"1402/07/30"} time={"12:50"} />

        {/* Content */}

        {/* Tags */}
        <Tags
          tags={[
            { id: "tag-1", name: "فلسکو" },
            { id: "tag-2", name: "مرکب" },
            { id: "tag-3", name: "بسته بندی" },
          ]}
          countLike={"10"}
          countComment={"15"}
        />

        {/*  comments */}
        <Comments />

          {/* simlar  */}
          <SimilarContent title={'مطالب مشابه '}/>
        <FooterCustom />
      </div>
    </>
  );
}

export default Page;
