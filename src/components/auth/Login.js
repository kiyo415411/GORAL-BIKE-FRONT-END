import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// const handleChangeModal = (modal) => {
//   setActiveModal(modal);
// };

// 登入模板
const loginValidationSchema = Yup.object({
  // Yup套件會驗證輸入格式
  email: Yup.string().email('電子信箱格式錯誤').required('此欄位必填'),
  password: Yup.string()
    .min('6', '密碼長度至少為6')
    .required('此欄位必填')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      '需包含一個英文字母，一個數字'
    ),
});
// 自製受 Formik 管理的 component
const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </>
  );
};

// const handleSubmit = async (values) => {
//   const loginData = await axios.post(`${API_URL}/auth/login`, values, {
//     withCredentials: true,
//   });
// };
function Login(props) {
  const { handleChangeModal } = props;
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-md-12 bg-white p-4 px-5 login">
            <div className="form-block mx-auto">
              <div className="text-center ">
                <img
                  className="goral_logo object-cover"
                  src={require(`../../images/Logo-green.png`)}
                  alt=""
                ></img>
                <h6 className="text-hightlight">會員登入</h6>
              </div>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginValidationSchema} //
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(values);
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
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
                          placeholder="使用者帳號"
                        />
                      </div>
                      <div className="form-group last mb-3">
                        <MyTextField
                          name="password"
                          type="text"
                          className="form-control"
                          placeholder="使用者密碼"
                        />
                      </div>
                    </div>
                    <div className=" text-center">
                      <input className="m-2" type="checkbox" checked />
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
