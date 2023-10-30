import React from "react";
import like from "@/public/Heart, Favorite, Love.svg";
import comment from "@/public/chat-message-1.svg";
import Image from "next/image";
function SingleTitle({ title, date, time }) {
  return (
    <>
      <div className="container py-5">
        <div className="d-flex flex-column">
          <span className="single-title w-100"> {title}</span>

          <div className="d-flex ">
          <span className="single-time"> {time}</span>
            {/* <span className="px-2">|</span> */}
            <span className="single-time"> {date}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTitle;
