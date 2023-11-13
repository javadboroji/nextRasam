"use client";
import React, { useState, useEffect } from "react";
import chat from "@/public/chat-message-1.svg";
import Image from "next/image";
import * as signalR from "@microsoft/signalr";
import ChatRecive from "./ChatRecive";
function Chat() {
  const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState('')
  const chatClickHandler = () => {
    setShowChat(true);
  };
  const inpOnchange=(e)=>{
    setMessage(e.target.value)
  }


  const closeChat =()=>{
    setShowChat(false)
  }


  /**==============================================
   *                SignalR config
   *  
   *  
   *  
   *  
   *=============================================**/
  let connection = new signalR.HubConnectionBuilder()
  .withUrl("http://192.168.3.17:82/SignalRHub")
  .withAutomaticReconnect()
  .build();
  
  const sendMessageHandler=()=>{
    connection.start().then(()=>{
      console.log("start");
      connection.send('sendMessage',message)
       connection.on("reciveMessage",)  
    })
    .then(()=>connection.stop());
    setMessage('')
  }
useEffect(() => {

}, [message])


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
            <input type="text" onChange={(e)=>inpOnchange(e)} value={message} placeholder="نوشتن ..."/>
            <button onClick={sendMessageHandler} > ارسال</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
