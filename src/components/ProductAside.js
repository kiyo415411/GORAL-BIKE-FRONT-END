// 商品篩選邊攔
function ProductAside() {
  const status = ['報名開放中', '報名未開放', '報名已結束'];
  return (
    <div className="product-aside">
      {/* 關鍵字篩選 */}
      <section>
        <input
          className="form-control me-2"
          type="search"
          placeholder="輸入關鍵字"
          aria-label="Search"
        />
      </section>
      {/* 報名狀態篩選 */}
      <section>
        <header className="fs-4">報名狀態</header>
        <hr />
        <ul className="list-unstyled">
          {status.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
      </section>
      {/* 報名費用篩選 */}
      <section>
        <header>報名費用</header>
        <hr />
        <div>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />{' '}
          <div className="d-flex align-items-center justify-content-between">
            <p className="m-0 h5">$0 - $23,000</p>
            <a
              href="#/"
              className="btn btn-primary fs-4 rounded-pill px-4 py-1 fw-lighter"
            >
              篩選
            </a>
          </div>
        </div>
      </section>
      {/* 報名人數篩選 */}
      <section>
        <header>報名人數</header>
        <hr />
        <input
          type="range"
          className="form-range"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
        <div className="d-flex align-items-center justify-content-between">
          <p className="m-0 h5">0 人 - 100 人</p>
          <a
            href="#/"
            className="btn btn-primary fs-4 rounded-pill px-4 py-1 fw-lighter "
          >
            篩選
          </a>
        </div>
      </section>
      {/* 活動地點 */}
      <section>
        <header>課程難度</header>
        <hr />
        <div className="d-flex gap-5">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="easy-checkbox"
            />
            <label className="form-check-label" for="easy-checkbox">
              入門
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="advance-checkbox"
            />
            <label className="form-check-label" for="advance-checkbox">
              進階
            </label>
          </div>
        </div>
      </section>
      {/* 活動日期 */}
      <section>
        <header>報名日期</header>
        <hr />
        <input type="date" />
        -
        <input type="date" />
      </section>
    </div>
  );
}

export default ProductAside;
