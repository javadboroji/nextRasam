import Link from "next/link";
import LayoutPage from "../Components/LayoutPage";
import "@/app/custome.css";
export default function DashboardLayout({ children }) {
  return (
    <LayoutPage>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-12 col-lg-2">
            <ul className="dashboard-items ">
              <li>
                <Link href={"profile"}> پروفایل</Link>
              </li>
              <li>
                <Link href={"borkmark"}> پست های ذخیره شده </Link>
              </li>
              <li>
                <Link href={"edit"}> ویرایش اطلاعات </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-8">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
