import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ForgotPassword(props) {
  const { handleChangeModal, handleClose } = props;
  const history = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // 傳資料到後端做登入
      const forgetPasswordRes = await axios.post(
        `${API_URL}/verify/forgetPassword`,
        values,
        {
          withCredentials: true,
        }
      );
      let forgetPasswordData = forgetPasswordRes.data;
      // 如果驗證成功跳出登入成功視窗
      if (forgetPasswordRes.status === 200 && forgetPasswordData.code === 200) {
        Swal.fire({
          icon: 'success',
          html: forgetPasswordData.msg,
          confirmButtonText: 'OK',
          focusConfirm: false,
          // buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            history('/');
            handleClose();
          }
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        html: err.response.data.error,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // customClass: {},
      });
      console.log(err.response.data);
    }
  };
  // email模板
  const mailValidationSchema = Yup.object({
    // Yup 會驗證輸入格式
    email: Yup.string().email('電子信箱格式錯誤').required('此欄位必填'),
  });

  // 自製受 Formik 管理的 component
  const MyTextField = ({ label, ...props }) => {
    // field 是一個object包含了 onChange, onBlur, name and value
    // meta 是一個object包含了 value, touched, error, and initialValue(顯示error，如果該輸入值是invalid且被訪問過)
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

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-md-12 bg-white p-4 px-5 forgot-password">
            <div className="form-block mx-auto">
              <div className="text-center ">
                <img
                  className="goral_logo object-cover"
                  src={require(`../../images/Logo-green.png`)}
                  alt=""
                ></img>
                <h6 className="text-highlight">忘記密碼</h6>
              </div>
              <div className="py-3">
                <p>
                  請輸入你註冊時的
                  Email，我們會發送一封信件，點擊信件中的連結以重設密碼。
                </p>
                <p>
                  找不到認證信時，請到「垃圾信件」分類查找，或在信箱搜尋「Goral」。
                </p>
              </div>
              <Formik
                initialValues={{ email: '' }}
                validationSchema={mailValidationSchema}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.setSubmitting(false);
                  actions.resetForm();
                }}
              >
                {(props) => (
                  <Form>
                    <div className="form-group last mb-3">
                      <MyTextField
                        label="請輸入您的信箱"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
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
              <div className="text-center pt-3">
                <a
                  className="text-highlight"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChangeModal('登入');
                  }}
                >
                  回上一頁
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
