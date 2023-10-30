'use client'
import React from 'react'

function ImageBas64({url ,classCustom}) {
    const dataURI = `data:image/jpeg;base64, ${url}`;
  return (
     <img   src={dataURI} alt='image' className={classCustom&&classCustom}/>
     
  )
}

export default ImageBas64