function Certification(props) {
  const { handleChangeModal } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-md-12 bg-white p-4 px-5 certification">
            <div className="form-block mx-auto">
              <div className="text-center ">
                <img
                  className="goral_logo object-cover"
                  src={require(`../../images/Logo-green.png`)}
                  alt=""
                ></img>
                <h6 className="text-highlight">重新寄送認證信</h6>
              </div>
              <div className="py-3">
                <p>
                  我們會將一封認證信寄送至你的
                  Email，請點擊信裡的確認連結以開通帳號。
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

export default Certification;
