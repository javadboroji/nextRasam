"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
function Profile() {
  const [file, setFile] = useState("");
  const imageFileChangeHandler = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {

  }, [file])
  
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-4">
            <div className=" d-flex flex-column mb-3 dashboard-profile">
              <p className="mb-2 ms-3 dashboard-text"> تصویر پروفایل</p>
              <span>
                <Image src={file ? file : ""} alt="profile"   width={150}
                    height={150} />
              </span>
              <div className="dashboard-btn position-reletive">
                  <p className="fileUpload"> انتخاب عکس </p>
                  <input
                    type="file"
                    onChange={(e) => imageFileChangeHandler(e)}
                  />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="d-flex mb-3">
              <span className=" dashboard-text"> نام کاربری:</span>
              <span className="pe-3"> کیوان علیشری</span>
            </div>

            <div className="d-flex mb-3">
              <span className=" dashboard-text"> ایمیل:</span>
              <span className="pe-3"> test@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-btn me-auto" id="edit">
        <button> ویرایش</button>
      </div>
    </div>
  );
}

export default Profile;
