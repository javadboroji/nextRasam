import Image from 'next/image'
import styles from './page.module.css'
import HeaderCustome from "@/app/Components/HeaderCustome";
import '@/app/custome.css'
import BannerHome from './Components/BannerHome';
import Advantages from './Components/Advantages';
import WhayRasam from './Components/WhayRasam';
import Property from './Components/Property';
import OurTool from './Components/OurTool';
import FooterCustom from './Components/FooterCustom';
import LatestArticles from './Components/LatestArticles';
import Loading from './Components/Loading';
export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderCustome />
      <BannerHome />
      <Advantages />
      <WhayRasam />
      <Property />
      <OurTool />
      <LatestArticles />
      <FooterCustom />
    </main>
  )
}
