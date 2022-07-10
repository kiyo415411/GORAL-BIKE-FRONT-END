import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import { useLogin } from '../../utils/useLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const handleChangeModal = (modal) => {
//   setActiveModal(modal);
// };

function Login(props) {
  const { handleChangeModal, handleClose } = props;
  const { setIsLogin } = useLogin();
  const [passwordField, setPasswordField] = useState(false);
  const handleSwitchEyes = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'password') {
      setPasswordField(!passwordField);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const handleSubmit = async (values) => {
    try {
      // 傳資料到後端做登入
      const loginRes = await axios.post(`${API_URL}/auth/login`, values, {
        withCredentials: true,
      });
      let loginData = loginRes.data;
      // 如果驗證成功跳出登入成功視窗
      if (loginRes.status === 200 && loginData.code === 0) {
        Swal.fire({
          icon: 'success',
          html: '登入成功',
          confirmButtonText: 'OK',
          focusConfirm: false,
          // buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            setIsLogin(true);
            handleClose();
          }
        });
      } else {
        Toast.fire({
          icon: 'error',
          html: loginData.error,
          // customClass: {},
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
  // 登入模板
  const loginValidationSchema = Yup.object({
    // Yup 會驗證輸入格式
    email: Yup.string().email('電子信箱格式錯誤').required('此欄位必填'),
    password: Yup.string()
      .min('6', '密碼長度至少為6')
      .required('此欄位必填')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        '需包含至少一個英文、數字，且不可含有符號'
      ),
  });
  // 自製受 Formik 管理的 component
  const MyTextField = ({ label, ...props }) => {
    // field 是一個object包含了 onChange, onBlur, name and value
    // meta 是一個object包含了 value, touched, error, and initialValue(顯示error，如果該輸入值是invalid且被訪問過)
    const [field, meta] = useField(props);
    return (
      <>
        {field.name === 'password' ? (
          <div className="input-group">
            <input {...field} {...props} />
            <div
              className="btn btn-outline-subcontent rounded-0"
              id="password"
              onClick={handleSwitchEyes}
            >
              {passwordField ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        ) : (
          <input {...field} {...props} />
        )}
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
      </>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-md-12 bg-white p-4 px-3 px-sm-5 login">
            <div className="form-block mx-auto">
              <div className="text-center ">
                <img
                  className="goral_logo object-cover"
                  src={require(`../../images/Logo-green.png`)}
                  alt=""
                ></img>
                <h6 className="text-highlight">會員登入</h6>
              </div>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginValidationSchema} //
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.setSubmitting(false);
                  actions.resetForm();
                }}
              >
                {(props) => (
                  <Form>
                    <div className="py-3">
                      <div className="form-group last mb-3">
                        <MyTextField
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="請輸入電子信箱"
                        />
                      </div>
                      <div className="form-group last mb-3">
                        <MyTextField
                          name="password"
                          type={passwordField ? 'text' : 'password'}
                          className="form-control"
                          placeholder="使用者密碼"
                        />
                      </div>
                    </div>
                    <div className=" text-center">
                      <input
                        className="m-2"
                        type="checkbox"
                        onChange={() => {
                          console.log('remember');
                        }}
                      />
                      <label className="control control--checkbox mb-3 mb-sm-0" />
                      <span className="caption">記住帳號密碼</span>
                    </div>
                    <div className="text-center p-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        className="px-3"
                        onClick={(e) => {
                          e.preventDefault();
                          handleChangeModal('註冊');
                        }}
                      >
                        註冊
                      </a>
                      <p>|</p>
                      <a
                        href="#/"
                        className="px-3"
                        onClick={(e) => {
                          e.preventDefault();
                          handleChangeModal('忘記密碼');
                        }}
                      >
                        忘記密碼
                      </a>
                      <p>|</p>
                      <a
                        href="#/"
                        className="px-3"
                        onClick={(e) => {
                          e.preventDefault();
                          handleChangeModal('重寄認證信');
                        }}
                      >
                        重寄認證信
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      送出
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="text-with-hr">
                <span>或</span>
              </div>
              <div className="d-flex justify-content-center py-3">
                <div>
                  <img
                    className="google_logo"
                    src={require(`../../images/Google_Logo.png`)}
                    alt=""
                  />
                </div>
                <div className="px-2 py-3">
                  <a className="h5" href="#/">
                    使用Google帳號快速註冊
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
