"use client";
import React, { useState } from "react";
import avatar from "@/public/accounts.svg";
import alarm from "@/public/Alarm, Clock, Time, Timer.svg";
import Image from "next/image";
import ReplyComment from "./ReplyComment";
function Comment({ comment }) {
  const [reply, setReply] = useState(false);
  const replyCommentHandler = (id) => {
    setReply(true);
  };
  return (
    <>
      <div className="comment-border">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center commment-info-right">
            <span className="avatar">
              <Image src={avatar} alt="avatar" />
            </span>
            <span className="username"> {comment.name}</span>
            <div className="date d-flex  align-items-center">
              <Image src={alarm} alt="alarm" />
              <span>{comment.postageDateTime}</span>
            </div>
          </div>
          <div>
            {!reply && (
              <button
                type="button "
                className="btn-reply d-none d-md-block"
                onClick={() => replyCommentHandler(comment.commentId)}
              >

                پاسخ
              </button>
            )}
          </div>
        </div>
        <p className="comment-description">{comment.desription}</p>
        {reply && <ReplyComment closReply={setReply} />}{" "}
        {/** Reply icon active -{when active pass varible for close Reply} */}
        {!reply && (
          <button
            type="button "
            className="btn-reply d-block d-md-none float-start"
            onClick={() => replyCommentHandler(comment.commentId)}
          >
            پاسخ
          </button>
        )}
      </div>
      {/** Nested Comments  */}
      {comment.comments && comment.comments.length > 0 && (
        <div className="replies d-flex flex-column">
          {comment.comments.map((reply) => (
            <Comment key={reply.commentId} comment={reply} />
          ))}
        </div>
      )}
    </>
  );
}

export default Comment;
