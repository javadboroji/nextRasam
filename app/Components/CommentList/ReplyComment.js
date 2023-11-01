import React from 'react';
import dynamic from 'next/dynamic'
const Comments =dynamic(()=> import("@/app/Components/Comments"),{ssr:false })  

function ReplyComment({closReply}) {
    const closeReply=()=>{
        closReply(false)
    }
  return (
    <div className='container reply-box'>
        <Comments />
        <button type='button' className='btn-reply-close' onClick={closeReply}> بستن </button>
    </div>
  )
}

export default ReplyComment