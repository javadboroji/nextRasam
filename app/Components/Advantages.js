import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "@/app/envIndex";
import books from "@/public/bookss.svg"
import book from "@/public/book.svg"
import education from "@/public/education.svg"
import customer from "@/public/customer.svg"
const  GetCountCards=async()=> {
  const baseUrl = BASE_URL;
  const api = `${baseUrl}/api/v1/Articles/CategoriesOfArticlesCount`;
  const res =await fetch(api,{cache: 'no-store' })
  if(!res.ok){
    console.log('Failed to fetch data lats CategoriesOfArticlesCount')
  }
  return res.json()
}

async function Advantages() {
  let data=null
  data= await GetCountCards();
  if(data){
    return (
      <div className="advantage">
        <div className="container">
          <h4 className="title">
            {" "}
            بهترین کیفیت مطابق دانش روز دنیا را از ما بخواهید!
          </h4>
          <div className="row d-flex justify-content-center" data-aos="fade-down">
            {data.data &&
              data.data.map((item, i) => (
                <div className="col-10 col-md-6 col-xl-3 mb-3 mb-xl-0">
                  <div className="d-flex flex-column align-items-center card-advantage">
                    <div className="icon">
                       <Image src={item.row===1 ?book:item.row===2?books:item.row===3?education:customer} alt="icon" width={32} height={32} /> 
                    </div>
                    <div className="counter">
                    
                     {item.row===4? '+' :''}
                      <span id="counters-17" >
                        {" "}
                        {item.categoryCount}
                      </span>
                    </div>
                    <span className="title">
                      {item.categoryName}
                    </span>
                  </div>
                </div>
              ))}
  
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <p> مشکلی پیش آمده است!!</p>
    )
  }
  
}

export default Advantages;
