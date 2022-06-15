import React from 'react';

function Login() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center ">
          <div className="col-md-12 bg-white p-4 px-5 login">
            <div className="form-block mx-auto">
              <div className="text-center ">
                <img
                  className="goral_logo object-cover"
                  src={require(`../images/Logo-green.png`)}
                  alt=""
                ></img>
                <h6 className="text-hightlight">會員登入</h6>
              </div>
              <form action="#" method="post">
                <div className="py-3">
                  <div className="form-group last mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="使用者帳號"
                      id="email"
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="使用者密碼"
                      id="email"
                    />
                  </div>
                </div>
                <div class=" text-center">
                  <input className="m-2" type="checkbox" checked />
                  <label className="control control--checkbox mb-3 mb-sm-0" />
                  <span class="caption">記住帳號密碼</span>
                </div>
                <div className="text-center p-3 d-flex justify-content-center">
                  <a href="#/" className="px-3">
                    忘記密碼
                  </a>
                  <p className="">|</p>
                  <a href="#/" className="px-3">
                    重寄認證信
                  </a>
                </div>
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  送出
                </button>
              </form>
              <div className="text-with-hr">
                <span>或</span>
              </div>
              <div className="d-flex justify-content-center py-3">
                <div>
                  <img
                    className="google_logo"
                    src={require(`../images/Google_Logo.png`)}
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
