function ForgotPassword() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center ">
          <div className="col-md-12 bg-white p-4 px-5 forgot-password">
            <div className="form-block mx-auto">
              <div className="text-center ">
                <img
                  className="goral_logo object-cover"
                  src={require(`../images/Logo-green.png`)}
                  alt=""
                ></img>
                <h6 className="text-hightlight">忘記密碼</h6>
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
              <form action="#" method="post">
                <div className="form-group last mb-3">
                  <label for="email">請輸入您的信箱</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  送出
                </button>
              </form>
              <div className="text-center pt-3">
                <a className="text-hightlight" href="#/">
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
