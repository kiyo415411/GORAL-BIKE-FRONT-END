import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';

function PasswordReset() {
  const [newPassword, setNewPassword] = useState({
    password: '',
    rePassword: '',
  });

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
  const formik = useFormik({
    initialValues: {
      password: '',
      rePassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  return (
    <div className="container p-5 d-flex justify-content-center">
      <div className="m-5 text-nowrap p-5 gap-3 col-4 border shadow">
        <p className="m-0 p-0 fs-5 text-content mb-3">重設密碼</p>
        <p className="m-0 p-0 text-subcontent">設定一個新的高強度密碼</p>
        <form
          onReset={formik.handleReset}
          onSubmit={formik.handleSubmit}
          className="col-12 d-grid gap-3"
        >
          {/* ----------------------- 姓 */}
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
