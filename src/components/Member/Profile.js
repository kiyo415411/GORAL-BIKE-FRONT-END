import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';

// const profile = {
//   name: '',
//   phone: '',
//   email: '',
//   oldPassword: '',
//   password: '',
//   rePassword: '',
// };
function Profile() {
  const updateProfileValidationSchema = Yup.object({
    // Yup 會驗證輸入格式
    name: Yup.string().required('此欄位必填'),
    phone: Yup.string()
      .required('此欄位必填')
      .matches(/^09[0-9]{8}$/, '需符合手機號碼格式'),
    email: Yup.string().email('電子信箱格式錯誤').required('此欄位必填'),
  });
  const updatePasswordValidationSchema = Yup.object({
    // Yup 會驗證輸入格式
    oldPassword: Yup.string()
      .min('6', '密碼長度至少為6')
      .required('此欄位必填')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        '需包含一個英文字母，一個數字'
      ),
    newPassword: Yup.string()
      .min('6', '密碼長度至少為6')
      .required('此欄位必填')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        '需包含一個英文字母，一個數字'
      ),
    reNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], '與密碼欄位不相符')
      .required('此欄位必填'),
  });

  // 自製受 Formik 管理的 component
  const MySignUpField = ({ label, ...props }) => {
    // field 是一個object包含了 onChange, onBlur, name and value
    // meta 是一個object包含了 value, touched, error, and initialValue(顯示error，如果該輸入值是invalid且被訪問過)
    const [field, meta] = useField(props);
    return (
      <div className="form-group mb-3 px-2">
        <label className="label" htmlFor={props.name}>
          {label}
        </label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : (
          <div className="invisible">空白</div>
        )}
      </div>
    );
  };
  return (
    <>
      {/* 修改個人資料 */}
      <div className="profile pb-3 mb-5">
        <div className="text-center text-white bg-primary py-2 mb-5">
          修改個人資料
        </div>
        <div className="row justify-content-center gap-4 gap-md-0">
          <div className="col-md-4 col-12">
            <p className="fs-5 pb-2 text-primary text-center text-md-start">
              更換大頭貼照
            </p>
            <div className="d-flex gap-4 justify-content-center justify-content-md-start">
              <figure className="profile-img m-0">
                <img
                  src={require('../../images/dr_strange.jpg')}
                  alt=""
                  className="object-cover"
                />
              </figure>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="text-content">請從電腦選擇檔案</p>
                <label
                  htmlFor="file-upload"
                  className="btn btn-primary rounded-0"
                >
                  選擇照片
                </label>
                <input type="file" id="file-upload" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Formik
              initialValues={{
                name: '',
                phone: '',
                email: '',
              }}
              validationSchema={updateProfileValidationSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <div className="row px-5 px-md-0">
                    <div className="col-md-6">
                      <MySignUpField
                        label="姓名"
                        type="text"
                        className="form-control"
                        name="name"
                      />
                    </div>
                    <div className="col-md-6">
                      <MySignUpField
                        label="手機"
                        type="text"
                        className="form-control"
                        name="phone"
                      />
                    </div>
                    <div className="col-md-12">
                      <MySignUpField
                        label="信箱"
                        type="email"
                        className="form-control"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="text-center m-md-5 m-3">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-0 fs-5"
                    >
                      更新
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* 修改密碼 */}
      <div className="profile pb-3 mb-5">
        <div className="text-center text-white bg-primary py-2 mb-5">
          修改密碼
        </div>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            reNewPassword: '',
          }}
          validationSchema={updatePasswordValidationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <div className="row justify-content-center px-5 px-md-0">
                <div className="col-md-3">
                  <MySignUpField
                    label="舊密碼"
                    type="text"
                    className="form-control"
                    name="oldPassword"
                  />
                </div>
                <div className="col-md-3">
                  <MySignUpField
                    label="新密碼"
                    type="text"
                    className="form-control"
                    name="newPassword"
                  />
                </div>
                <div className="col-md-3">
                  <MySignUpField
                    label="確認新密碼"
                    type="text"
                    className="form-control"
                    name="reNewPassword"
                  />
                </div>
              </div>
              <div className="text-center mt-2 mb-3">
                <button
                  type="submit"
                  className="btn btn-primary rounded-0 fs-5"
                >
                  更新
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Profile;
