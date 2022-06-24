import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';

function SignUp(props) {
  const { handleChangeModal } = props;
  const signupValidationSchema = Yup.object({
    // Yup 會驗證輸入格式
    name: Yup.string().required('此欄位必填'),
    phone: Yup.string()
      .required('此欄位必填')
      .matches(/^09[0-9]{8}$/, '需符合手機號碼格式'),
    email: Yup.string().email('電子信箱格式錯誤').required('此欄位必填'),
    password: Yup.string()
      .min('6', '密碼長度至少為6')
      .required('此欄位必填')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        '需包含一個英文字母，一個數字'
      ),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '與密碼欄位不相符')
      .required('此欄位必填'),
  });

  // 自製受 Formik 管理的 component
  const MySignUpField = ({ label, example, ...props }) => {
    // field 是一個object包含了 onChange, onBlur, name and value
    // meta 是一個object包含了 value, touched, error, and initialValue(顯示error，如果該輸入值是invalid且被訪問過)
    const [field, meta] = useField(props);
    return (
      <div
        className={
          props.name === 'email'
            ? 'form-group mb-3 px-2'
            : 'form-group mb-3 px-2 w-50'
        }
      >
        <label className="label" htmlFor={props.name}>
          {label}
        </label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : (
          <div className="example-msg">{example}</div>
        )}
      </div>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 singup p-0">
            <div className="wrap d-md-flex">
              <div className="img"></div>
              <div className="p-4 p-md-5 bg-white">
                <div className="text-center">
                  <img
                    className="goral_logo object-cover"
                    src={require(`../../images/Logo-green.png`)}
                    alt=""
                  ></img>
                  <h4 className="pb-4 ">註冊Goral帳號</h4>
                </div>

                <Formik
                  initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    rePassword: '',
                  }}
                  validationSchema={signupValidationSchema}
                  onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }}
                >
                  {(props) => (
                    <Form>
                      <div className="d-flex">
                        <MySignUpField
                          label="姓名"
                          type="text"
                          className="form-control"
                          name="name"
                        />
                        <MySignUpField
                          label="手機"
                          type="text"
                          className="form-control"
                          name="phone"
                          example="不需「-」"
                        />
                      </div>
                      <MySignUpField
                        label="信箱"
                        type="email"
                        className="form-control"
                        name="email"
                      />
                      <div className="d-flex">
                        <MySignUpField
                          label="密碼"
                          type="text"
                          className="form-control"
                          name="password"
                          example="密碼需為 6 碼以上的英文、數字"
                        />
                        <MySignUpField
                          label="再次輸入密碼"
                          type="text"
                          className="form-control"
                          name="rePassword"
                        />
                      </div>
                      <div className="py-3">
                        <p>
                          按下註冊鈕的同時，表示您已詳閱我們的
                          <a href="#/" className="text-highlight">
                            資料使用政策
                          </a>
                          與
                          <a href="#/" className="text-highlight">
                            使用條款
                          </a>
                          ，同意使用 Goral 所提供的服務並訂閱電子報。
                        </p>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control btn btn-primary submit px-3"
                        >
                          註冊
                        </button>
                      </div>
                      <div className="py-3 text-center">
                        <p>
                          已有帳號？
                          <a
                            href="#/"
                            className="text-highlight"
                            onClick={(e) => {
                              e.preventDefault();
                              handleChangeModal('登入');
                            }}
                          >
                            馬上登入
                          </a>
                        </p>
                      </div>
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
      </div>
    </>
  );
}

export default SignUp;
