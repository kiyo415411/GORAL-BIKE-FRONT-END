import { FaThLarge, FaThList } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
export default function TopSort() {
  return (
    <div className="d-flex justify-content-between px-3">
      <ul className="list-unstyled d-flex gap-2">
        <li>
          <a href="#/" className="text-content">
            <FaThList />
          </a>
        </li>
        <li>
          <a href="#/" className="text-hightlight">
            <FaThLarge />
          </a>
        </li>
      </ul>
      <a href="#/" className="text-hightlight">
        商品排序 <AiFillCaretDown size={20} />
      </a>
    </div>
  );
}
