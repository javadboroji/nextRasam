import Image from "next/image";
import like from "@/public/Heart, Favorite, Love.svg";
import comment from "@/public/chat-message-1.svg";
import Share from "@/public/Share.svg";
function Tags({ tags, countLike, countComment }) {
  return (
    <div className="tags">
      <div className="container border-top py-3">
        <div className="icons w-100">
          <div className="icon-wrap">
            <Image src={Share} alt="icon" />
          </div>
          <div className="icon-wrap">
            <Image src={like} alt="icon" />
            <span className="count"> {countLike}</span>
          </div>
          <div className="icon-wrap">
            <Image src={comment} alt="icon" />
            <span className="count"> {countComment}</span>
          </div>
        </div>
        <div className="tags w-100 d-flex flex-wrap mt-5 mt-lg-0">
          {tags.length > 0 && !tags.every(tag => tag === '') &&  
            <>
              <span className="tag-title"> برچسب ها :</span>

              {tags.map((tag, i) => {
                return (
                  <span className="tag-badg" key={i}>
                    {tag}
                  </span>
                );
              })}
            </>
         }
        </div>
      </div>
    </div>
  );
}

export default Tags;
