import { FiSearch } from 'react-icons/fi';
// 商品篩選邊攔
function ProductAside() {
  const status = ['報名開放中', '報名未開放', '報名已結束'];
  return (
    <div className="product-aside shadow p-4">
      {/* 關鍵字篩選 */}
      <section className="position-relative">
        <input
          className="form-control me-2 mb-5 rounded-pill border-2 border-primary px-4"
          type="search"
          placeholder="輸入關鍵字"
          aria-label="Search"
        ></input>
        <a
          href="#/"
          className="position-absolute top-0 end-0 pe-4 pt-1 text-line"
        >
          <FiSearch size={26} strokeWidth={3} />
        </a>
      </section>
      {/* 報名狀態篩選 */}
      <section>
        <h4 className="text-primary mb-3">報名狀態</h4>
        <div className="border border-1 border-hightlight mb-3" />
        <ul className="list-unstyled d-grid gap-3 mb-5">
          {status.map((v, i) => {
            return (
              <li key={i}>
                <a href="#/">{v}</a>
              </li>
            );
          })}
        </ul>
      </section>
      {/* 報名費用篩選 */}
      <section>
        <h4 className="text-primary mb-3">報名費用</h4>
        <div className="border border-1 border-hightlight mb-3" />
        <div>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />{' '}
          <div className="d-flex align-items-center justify-content-between  mb-5">
            <p className="m-0 fs-5">$ 0 - $ 23,000</p>
            <a
              href="#/"
              className="btn btn-primary fs-6 rounded-pill px-4 py-1"
            >
              篩選
            </a>
          </div>
        </div>
      </section>
      {/* 報名人數篩選 */}
      <section>
        <h4 className="text-primary mb-3">報名人數</h4>
        <div className="border border-1 border-hightlight mb-3" />
        <input
          type="range"
          className="form-range"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
        <div className="d-flex align-items-center justify-content-between mb-5">
          <p className="m-0 fs-5">0 人 - 100 人</p>
          <a href="#/" className="btn btn-primary fs-6 rounded-pill px-4 py-1">
            篩選
          </a>
        </div>
      </section>
      {/* 活動地點 */}
      <section>
        <h4 className="text-primary mb-3">課程難度</h4>
        <div className="border border-1 border-hightlight mb-3" />
        <div className="d-flex gap-5 mb-5">
          <div className="form-check text-primary">
            <input
              className="form-check-input"
              type="checkbox"
              id="easy-checkbox"
            />
            <label className="form-check-label" for="easy-checkbox">
              入門
            </label>
          </div>
          <div className="form-check  text-primary">
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
        <h4 className="text-primary mb-3">報名日期</h4>
        <div className="border border-1 border-hightlight mb-4" />
        <div className="d-flex gap-1">
          <input type="date" />
          -
          <input type="date" />
        </div>
      </section>
    </div>
  );
}

export default ProductAside;
