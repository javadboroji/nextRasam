// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import Chat from "@/public/chat-message-1.svg";
// import whatsapp from "@/public/whatsapp.svg"
// import telegram from "@/public/telgram.svg"
// import sms from "@/public/sms.svg"
// import call from "@/public/call.svg"
// function FavButton() {
//   const [favButton, setFavButton] = useState(false);


//   const favButtonHandler = () => {
//     setFavButton(!favButton);
//   };

//   const contactList=[
//     {
//         id:'contact1',
//         title:'واتساپ',
//         icon:whatsapp
//     },
//     {
//         id:'contact2',
//         title:'تلگرام',
//         icon:telegram
//     },
//     {
//         id:'contact3',
//         title:'پیامک',
//         icon:sms
//     },
//     {
//         id:'contact4',
//         title:'درخواست تماس',
//         icon:call
//     },
//   ]

//   const socialHandler =(id)=>{
//     if(id==="contact1"){
//         window.open('https://api.whatsapp.com/send?phone=09392409359', '_blank');
//     }else if(id==="contact2"){
//         window.open('https://t.me/ArashMarzban', '_blank');
//     }else if(id==="contact3"){
//         window.open(`sms:09119826955?body=${encodeURIComponent('سلام')}`, '_blank');
//     }else if(id==="contact4"){
//         window.open(`tel:09119826955`);
//     }
//   }
//   return (
//     <div className="fav-button-container">
//       <div className="fav-button">
//         <button className="fav-button-btn" onClick={() => favButtonHandler()}>
//           <Image className="chat-fav-button" src={Chat} alt="chat" />

//         </button>
//       </div>
//       {favButton && <div className="fav-button-box">
        
//             <div className="header">
//                 <p>چگونه می خواهید با ما در تماس باشید؟</p>
//             </div>
//             <ul className="p-0">
//                 {contactList.map((item)=>{return(
//                      <li key={item.id} className="fav-button-item">
//                         <button className="w-100 border-0" onClick={()=>socialHandler(item.id)} >
//                             <span> {item.title}</span>
//                             <Image src={item.icon} alt={item.title}/>
//                         </button>
//                      </li>
//                 )})}
               
//             </ul>
//         </div>}
//     </div>
//   );
// }

// export default FavButton;
