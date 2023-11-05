"use client";
import React, { useState, useEffect } from "react";
import chat from "@/public/chat-message-1.svg";
import Image from "next/image";
function Chat() {
  const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState('')
  const chatClickHandler = () => {
    setShowChat(true);
  };
  const inpOnchange=(e)=>{
    setMessage(e.target.value)
  }
  const sendMessageHandler=()=>{
    console.log(message);
  }

  const closeChat =()=>{
    setShowChat(false)
  }
  return (
    <div className="chat">
        {!showChat  &&<Image
        src={chat}
        width={50}
        className="chat-icon"
        onClick={() => chatClickHandler()}
      />}
     

      {showChat && (
        <div className="chat-container">
          <div className="chat-header">
            <span> سیستم پشتیبانی آنلاین رسام نقش آناهیتا</span>
            <span onClick={closeChat} className="chat-close"> X</span>
          </div>
          <div className="chat-main">
            <p className="message"> سلام!</p>
            <p className="message"> خوبید!</p>
            <p className="message"> ???!</p>
            <p className="message admin"> سلام بفرمایید</p>
            <p className="message admin"> بله  </p>
          </div>
          <div className="chat-input">
            <input type="text" onChange={(e)=>inpOnchange(e)} placeholder="نوشتن ..."/>
            <button onClick={()=>sendMessageHandler()} value={message}> ارسال</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
