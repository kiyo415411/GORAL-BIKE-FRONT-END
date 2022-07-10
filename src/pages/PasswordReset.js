import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/config';
import Swal from 'sweetalert2';

function PasswordReset() {
  const location = useLocation();
  const pathname = location.pathname;
  const resetString = pathname.split('/').pop();
  const resetStringCorrect =
    resetString.includes('m=') && resetString.includes('v=');
  const email = resetStringCorrect
    ? resetString.split('&')[0].split('=')[1]
    : 0;

  const verifyString = resetStringCorrect
    ? resetString.split('&')[1].split('=')[1]
    : 0;

  const history = useNavigate();
  const handleSubmit = async (values) => {
    try {
      // 傳資料到後端做登入
      const resetPasswordRes = await axios.post(
        `${API_URL}/verify/resetPassword`,
        { ...values, email: email, verifyString: verifyString },
        {
          withCredentials: true,
        }
      );
      let resetPasswordData = resetPasswordRes.data;
      // 如果驗證成功跳出登入成功視窗
      if (resetPasswordRes.status === 200 && resetPasswordData.code === 0) {
        Swal.fire({
          icon: 'success',
          html: '密碼修改成功',
          confirmButtonText: 'OK',
          focusConfirm: false,
          // buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            history('/');
          }
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        html: err.response.data.error,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
      });
    }
  };
  // 密碼驗證 schema
  const validationSchema = yup.object({
    password: yup
      .string()
      .min('6', '密碼長度至少為6')
      .required('此欄位必填')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        '需包含一個英文字母，一個數字'
      ),
    rePassword: yup
      .string()
      .oneOf([yup.ref('password'), null], '與密碼欄位不相符')
      .required('此欄位必填'),
  });
  // formik 設定
  const formik = useFormik({
    initialValues: {
      password: '',
      rePassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      handleSubmit(values);
      actions.setSubmitting(false);
      actions.resetForm();
    },
  });

  return (
    <div className="container p-5 d-flex justify-content-center min-height-75 align-items-center">
      <div className="m-5 text-nowrap p-5 gap-3 col-4 border shadow">
        <p className="m-0 p-0 fs-5 text-content mb-3">重設密碼</p>
        <p className="m-0 p-0 text-subcontent">設定一個新的高強度密碼</p>
        <form
          onReset={formik.handleReset}
          onSubmit={formik.handleSubmit}
          className="col-12 d-grid gap-3"
        >
          <TextField
            id="password"
            name="password"
            label="新密碼 New password"
            variant="standard"
            type="search"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password ? formik.errors.password : null}
            className="text-field"
          />
          <TextField
            id="rePassword"
            name="rePassword"
            label="確認密碼 Repeat Password"
            variant="standard"
            type="search"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            error={
              formik.touched.rePassword && Boolean(formik.errors.rePassword)
            }
            helperText={
              formik.errors.rePassword ? formik.errors.rePassword : null
            }
            className="text-field"
          />
          <div className="d-flex justify-content-between mt-3">
            <button
              className="text-nowrap m-0 btn fs-6 border-2 rounded-0 btn-primary rounded-pill px-5"
              type="reset"
            >
              清除
            </button>
            <button
              className="text-nowrap m-0 btn fs-6 border-2 rounded-0 btn-outline-primary rounded-pill px-5"
              type="submit"
            >
              送出
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
