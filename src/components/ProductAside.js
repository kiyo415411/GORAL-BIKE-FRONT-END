// 商品篩選邊攔
function ProductAside() {
  const status = ['報名開放中', '報名未開放', '報名已結束'];
  return (
    <div className="product-aside">
      {/* 關鍵字篩選 */}
      <section>
        <input
          class="form-control me-2"
          type="search"
          placeholder="輸入關鍵字"
          aria-label="Search"
        />
      </section>
      {/* 報名狀態篩選 */}
      <section>
        <header>報名狀態</header>
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
            class="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />
          <p>$0 - $23,000</p>
          <a
            href="#/"
            className="btn btn-primary fs-4 rounded-pill px-4 py-1 fw-lighter"
          >
            篩選
          </a>
        </div>
      </section>
      {/* 報名人數篩選 */}
      <section>
        <header>報名人數</header>
        <hr />
        <input
          type="range"
          class="form-range"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
        <div className="d-flex align-items-center">
          <p className="m-0">0 人 - 100 人</p>
          <a
            href="#/"
            className="btn btn-primary fs-4 rounded-pill px-4 py-1 fw-lighter"
          >
            篩選
          </a>
        </div>
      </section>
      {/* 活動地點 */}
      <section>
        <header>報名地點</header>
        <hr />
      </section>
      {/* 活動日期 */}
      <section>
        <header>報名日期</header>
        <hr />
      </section>
    </div>
  );
}

export default ProductAside;
