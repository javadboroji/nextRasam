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
                  شرکت رسام نقش آناهیتا در سال ۱۴۰۰ با تکیه بر دانش فنی موسسان
                  خود تاسیس شد این شرکت با راه اندازی تعداد دو خط از ماشین آلات
                  لیزری تولید کلیشه اقدام به تولید کلیشه های ژلاتینی لیزری نموده
                  و با راه اندازی ۲ خط کلیشه دیجیتال با استفاده از تکنولوژی شرکت
                  کداک قابلیت تولید این محصول با کیفیت بسیار بالا را دارد.
                </span>
                <button type="button" className=" btn-blue-gradient">
                <Link href={'https://formafzar.com/RhtudQdy6L/formLogin/3'}> ثبت سفارش </Link>
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
