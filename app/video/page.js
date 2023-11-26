import React from 'react'
import LayoutPage from '../Components/LayoutPage'
import '@/app/custome.css'
import VideoList from '../Components/VideoList/VideoList'
import BreadcrumbCustom from '../Components/BreadcrumbCustom'
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
    </LayoutPage>
  )
}

export default page