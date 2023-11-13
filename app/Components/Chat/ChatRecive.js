"use client"
import React,{useEffect} from 'react'
import * as signalR from "@microsoft/signalr";

function ChatRecive() {
    let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://192.168.3.17:82/SignalRHub")
    .withAutomaticReconnect()
    .build();
    useEffect(() => {
        console.log('111111111111111111');
     connection.start().then(()=>{
        connection.on('reciveMessage',()=>console.log('messageRecive Call'))
     })
    },)
    
  return (
    <div>ChatRecive</div>
  )
}

export default ChatRecive