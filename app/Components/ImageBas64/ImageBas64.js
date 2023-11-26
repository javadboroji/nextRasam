import Image from "next/image";
function ImageBas64({url ,classCustom}) {
    const dataURI = `data:image/jpeg;base64, ${url}`;
  return (
     <Image src={dataURI} alt='image' fill loading="lazy" className={classCustom&&'classCustom'} style={{objectFit:"cover"}}  />
  )
}

export default ImageBas64