import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div className="container">
      <p className="comment-list-title"> دیدگا ها</p>
      <ul className="comment-list">
        {comments.length>0&&comments.map((item) => {
            return (
            <Comment key={item.commentId} comment={item}/>
            );
          })}
      </ul>
    </div>
  );
}

export default CommentList;
