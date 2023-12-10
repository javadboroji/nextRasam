import React from 'react'
import LayoutPage from '../Components/LayoutPage'
import '@/app/custome.css'
import VideoList from '../Components/VideoList/VideoList'
import BreadcrumbCustom from '../Components/BreadcrumbCustom'
import FavButton from '../Components/FavButton'
export const metadata  = {
  title: 'ویدیو',
  description: 'ویدیو',
}
function page() {
  return (
    <LayoutPage>
      <BreadcrumbCustom />
        <div className='video-content'>
          <VideoList/>
        </div>
        <FavButton/> 
    </LayoutPage>
  )
}

export default page