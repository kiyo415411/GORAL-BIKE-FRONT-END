import { FiSearch } from 'react-icons/fi';
export default function SearchInput() {
  return (
    <div className="position-relative">
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
    </div>
  );
}
