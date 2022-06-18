function SignUp() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center ">
          <div className="col-md-12 col-lg-10 singup">
            <div className="wrap d-md-flex">
              <div className="img"></div>
              <div className="p-4 p-md-5 bg-white">
                <div>
                  <div className="text-center">
                    <img
                      className="goral_logo object-cover"
                      src={require(`../images/Logo-green.png`)}
                      alt=""
                    ></img>
                    <h4 className="pb-4 ">註冊Goral帳號</h4>
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="d-flex">
                    <div className="form-group mb-3 w-50 px-2">
                      <label className="label" for="name">
                        姓名
                      </label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group mb-3 w-50 px-2">
                      <label className="label" for="phone">
                        電話
                      </label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group mb-3 px-2">
                    <label className="label" for="email">
                      信箱
                    </label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="d-flex">
                    <div className="form-group mb-3 w-50 px-2">
                      <label className="label" for="password">
                        密碼
                      </label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group mb-3 w-50 px-2">
                      <label className="label" for="checkpassword">
                        再次輸入密碼
                      </label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="py-3">
                    <p>
                      按下註冊鈕的同時，表示您已詳閱我們的
                      <a href="#/" className="text-hightlight">
                        資料使用政策
                      </a>
                      與
                      <a href="#/" className="text-hightlight">
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
                      <a href="#/" className="text-hightlight">
                        馬上登入
                      </a>
                    </p>
                  </div>
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
      </div>
    </>
  );
}

export default SignUp;
