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
          <div className="border position-relative w-75">
            <div className="border position-absolute border-dark w-25"></div>
            <div
              className="position-absolute bg-dark rounded-circle"
              style={{
                width: '10px',
                height: '10px',
                left: '45px',
                top: '-4px',
              }}
            ></div>
            <p>$0-$23,000</p>
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
