import React, { useEffect, useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// const profile = {
//   name: '',
//   phone: '',
//   email: '',
//   oldPassword: '',
//   password: '',
//   rePassword: '',
// };

function Profile(props) {
  const history = useNavigate();
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
  const [fileSrc, setFileSrc] = useState(null);
  const [uploadPhoto, setUploadPhoto] = useState('');
  const { userData, setUserData, setIsLogin } = props;
  const { userId, name, email, phone, photo } = userData;

  const fetchUpdateProfile = async (formData) => {
    try {
      let response = await axios.post(
        `${API_URL}/member/profile/update`,
        formData,
        {
          withCredentials: true,
        }
      );
      const profileUpdateRes = response.data;
      Swal.fire({
        icon: 'success',
        html: profileUpdateRes.msg,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
        // customClass: {
        // },
      }).then((result) => {
        if (result.isConfirmed) {
          fetchProfile();
        }
      });
    } catch (error) {
      const errMsg = error.response.data.message;
      Swal.fire({
        icon: 'warning',
        html: errMsg,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
        // customClass: {
        // },
      });
    }
  };

  const fetchProfile = async () => {
    if (!userId) {
      return;
    }
    let response = await axios.get(`${API_URL}/member/profile/${userId}`);
    console.log('newfetch', response.data.data);
    const newUserData = response.data.data;
    setUserData({ ...userData, ...newUserData });
  };

  const handleUploadFile = (e) => {
    if (!e.target.files[0]) return;
    var reader = new FileReader();
    setUploadPhoto(e.target.files[0]);
    reader.onload = function () {
      setFileSrc(reader.result);
    };
    reader?.readAsDataURL(e?.target?.files[0]);
    e.target.value = '';
  };

  const handleProfileSubmit = (values) => {
    let formData = new FormData();
    formData.append('user_id', userId);
    formData.append('email', values.email);
    formData.append('name', values.name);
    formData.append('phone', values.phone);
    formData.append('photo', uploadPhoto);
    fetchUpdateProfile(formData);
  };

  const handlePasswordSubmit = async (values) => {
    try {
      let response = await axios.post(
        `${API_URL}/member/password/update`,
        values,
        {
          withCredentials: true,
        }
      );
      const passwordUpdateRes = response.data;
      Swal.fire({
        icon: 'success',
        html: passwordUpdateRes.msg,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
        // customClass: {
        // },
      }).then(async (result) => {
        if (result.isConfirmed) {
          let res = await axios.get(`${API_URL}/auth/logout`, {
            withCredentials: true,
          });
          console.log(res.data);
          if (res.data.code === 0) {
            setUserData({
              userId: 0,
              email: '',
              name: '',
              phone: '',
              photo: '',
            });
            setIsLogin(false);
            history('/');
          }
        }
      });
    } catch (error) {
      const errorMsg = error.response.data.error;
      Swal.fire({
        icon: 'warning',
        html: errorMsg,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
        // customClass: {
        // },
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userId]);
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
                {fileSrc ? (
                  <img src={fileSrc} alt="" className="object-cover" />
                ) : (
                  <img
                    src={
                      photo
                        ? `${IMAGE_URL}/members/${photo}`
                        : require('../../images/picture.png')
                    }
                    alt=""
                    className="object-cover"
                  />
                )}
              </figure>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="text-content">請從電腦選擇檔案</p>
                <label
                  htmlFor="file-upload"
                  className="btn btn-primary rounded-0 mb-2"
                >
                  選擇照片
                </label>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleUploadFile}
                />
                <span className="error-msg mt-0">(檔案大小限制為 200KB)</span>
                <span className="error-msg mt-0">
                  (檔案類型限 jpg,jpeg,png)
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Formik
              initialValues={{
                name: name,
                phone: phone,
                email: email,
              }}
              enableReinitialize={true}
              validationSchema={updateProfileValidationSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                handleProfileSubmit(values);
                actions.setSubmitting(false);
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
            user_id: parseInt(userId),
            oldPassword: '',
            newPassword: '',
            reNewPassword: '',
          }}
          enableReinitialize={true}
          validationSchema={updatePasswordValidationSchema}
          onSubmit={(values, actions) => {
            handlePasswordSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
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
