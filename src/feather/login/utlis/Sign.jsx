import { Formik, useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { fetchSignUserAction } from '../redux/action'
const Sign = () => {
const dispatch=useDispatch()
  const formik = useFormik({
    initialValues: {
      "taiKhoan": "",
      "matKhau": "",
      "confirmPass": "",
      "email": "",
      "soDt": "",
      "maNhom": "GP01",
      "hoTen": ""
    },
    onSubmit: (value) => {
      dispatch(fetchSignUserAction(value))
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("required"),
      matKhau: Yup.string().required("required"),
      confirmPass: Yup.string().oneOf([Yup.ref('matKhau'), null], 'Passwords must match'),
      email: Yup.string().required('required').email("email not invalid"),
      soDt: Yup.number("not number").required("required"),
      hoTen: Yup.string().required("required"),
    })

  })
  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={formik.handleSubmit}>
                {/* Email input */}
                <div className="mb-6">
                  <input name='taiKhoan' onChange={formik.handleChange} type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Tài khoản" />
                  {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                    <p>{formik.errors.taiKhoan}</p>
                  )}
                </div>
                <div className="mb-6">
                  <input name='matKhau' onChange={formik.handleChange} type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Mật khẩu" />
                  {formik.errors.matKhau && formik.touched.matKhau && (
                    <p>{formik.errors.matKhau}</p>
                  )}
                </div>
                <div className="mb-6">
                  <input name='confirmPass' onChange={formik.handleChange} type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Confirm mật khẩu" />
                  {formik.errors.confirmPass && formik.touched.confirmPass && (
                    <p>{formik.errors.confirmPass}</p>
                  )}
                </div>
                <div className="mb-6">
                  <input name='hoTen' onChange={formik.handleChange} type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Họ tên" />
                  {formik.errors.hoTen && formik.touched.hoTen && (
                    <p>{formik.errors.hoTen}</p>
                  )}
                </div>
                <div className="mb-6">
                  <input name='email' onChange={formik.handleChange} type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                  {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
                  )}
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input name='soDt' onChange={formik.handleChange} type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Số Điện thoại" />
                  {formik.errors.soDt && formik.touched.soDt && (
                    <p>{formik.errors.soDt}</p>
                  )}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3" defaultChecked />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                  </div>
                  <a href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button type="submit" className=" border-cyan-50 cursor-pointer inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  Sign in
                </button>


              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Sign
