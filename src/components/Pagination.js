// 底部分頁
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
function Pagination() {
  return (
    <nav className="d-flex justify-content-center pt-4">
      <ul className="pagination gap-2">
        <li className="page-item">
          <a
            href="#/"
            className="btn btn-outline-primary rounded-circle px-2 py-1"
          >
            <RiArrowLeftSLine />
          </a>
        </li>
        <li className="page-item">
          <a href="#/" className=" btn btn-outline-primary rounded-circle py-1">
            1
          </a>
        </li>
        <li className="page-item active">
          <a
            href="#/"
            className="page-link btn btn-outline-primary rounded-circle py-1"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a href="#/" className="btn btn-outline-primary rounded-circle py-1">
            3
          </a>
        </li>
        <li className="page-item">
          <a
            href="#/"
            className="btn btn-outline-primary rounded-circle px-2 py-1"
          >
            <RiArrowRightSLine />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
