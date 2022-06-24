import { FiSearch } from 'react-icons/fi';
export default function SearchInput() {
  return (
    <form className="position-relative">
      <input
        className="form-control me-2 mb-5 rounded-pill border-2 border-primary px-4"
        type="text"
        placeholder="搜尋商品名稱"
        id="searchWord"
        name="searchWord"
      ></input>
      <button className="btn position-absolute top-0 end-0 pe-4 pt-1 text-line">
        <FiSearch size={26} strokeWidth={3} />
      </button>
    </form>
  );
}
