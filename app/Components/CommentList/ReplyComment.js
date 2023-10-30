import React from 'react'
import Comments from '../Comments'

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