import Link from "next/link";
function BannerHome() {
  return (
    <div className="banner-main d-flex justify-content-center position-absolut">
      <div className="banner-content  d-flex align-items-center">
        <div className="container">
          <div className="row d-flex  ">
            <div className="col-12 col-lg-8">
              <div className=" d-flex flex-column ">
                <h3 className="title typed-out"> فلکسوگرافی رسام نقش </h3>
                <p className="sub-title">
                  {" "}
                  تولید کننده انواع کلیشه های ژلاتینی (دیجیتال){" "}
                </p>
                <span className="description">
                  شرکت رسام نقش آناهیتا در سال ۱۴۰۰ در کیلومتر ۲۵ جاده مخصوص
                  کرج‌‌ تاسیس و راه اندازی شد. این مجموعه با توانایی تولید کلیشه
                  های لیزری برای انواع صنایع تولید چاپ فلکسو توانسته است تجربه و
                  تخصص را در کنار سرعت و کیفیت در اختیار مشتریان خود قرار دهد.
                  محصولات ما در انواع چاپ های فلکسو از جمله Wide web , Mide web
                  , Narrow web و چاپهای High graphics corrugated قابل مصرف است.
                </span>
                <button type="button" className=" btn-blue-gradient">
                  <Link href={"https://formafzar.com/RhtudQdy6L/formLogin/3"}>
                    {" "}
                    ثبت سفارش{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
