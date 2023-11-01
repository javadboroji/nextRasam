import Image from "next/image";
function ImageBas64({url ,classCustom}) {
    const dataURI = `data:image/jpeg;base64, ${url}`;
  return (
     <Image src={dataURI} alt='image' className={classCustom&&'classCustom'} style={{objectFit:"cover"}} fill />
  )
}

export default ImageBas64