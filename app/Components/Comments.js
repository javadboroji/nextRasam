"use client";
import React from "react";
import { useFormik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

function Comments() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      text: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(6, "حداقل باید 6 کارکتر باشد ")
        .required("این فیلد اجباری می باشد"),
      email: Yup.string()
        .email("ایمیل نامعتبر است ")
        .required("ایمیل اجباری است"),
      text: Yup.string().required("این فیلد اجباری می باشد"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="comment my-5" >
      <div className="container">
        <p className="comment-title"> دیدگاه شما</p>
        <form onSubmit={formik.handleSubmit} className="w-100">
          <div className="d-flex w-100 position-relative flex-column flex-md-row">
            <div className="d-flex flex-column w-100 mb-3 mb-md-0">
              <input
                placeholder="نام "
                type="text"
                name="username"
                className="input"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="input-warning">{formik.errors.username}</p>
              ) : null}
            </div>
            <div className="d-flex w-100 flex-column mb-3 mb-md-0">
              <input
                placeholder="ایمیل "
                type="text"
                name="password"
                className="input"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="input-warning">{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="d-flex w-100 flex-column ">
            <textarea
              placeholder="دیدگاه "
              className="input input-larg"
              {...formik.getFieldProps("text")}
            />
            {formik.touched.text && formik.errors.text ? (
              <span className="input-warning">{formik.errors.text}</span>
            ) : null}
          </div>
          <button type="submit" className="btn-outline-blue">
            ارسال دیدگاه
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
