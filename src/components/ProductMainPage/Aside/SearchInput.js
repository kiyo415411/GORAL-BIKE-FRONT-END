import { FiSearch } from 'react-icons/fi';
export default function SearchInput(props) {
  return (
    <div className="position-relative">
      <input
        className="form-control me-2 mb-2 rounded-pill border-2 border-primary px-4"
        type="text"
        placeholder="搜尋商品名稱"
        id="searchWord"
        name="searchWord"
        onChange={(e) => {
          props.setCurrentSearch(e.target.value);
          props.setPage(1);
        }}
      ></input>
      <button className="btn position-absolute top-0 end-0 pe-4 pt-1 text-line">
        <FiSearch size={26} strokeWidth={3} />
      </button>
    </div>
  );
}
