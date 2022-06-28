import { FaThLarge, FaThList } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
export default function TopSort(props) {
  return (
    <div className="d-flex justify-content-between px-3">
      <ul className="list-unstyled d-flex gap-2">
        <li>
          <a
            href="#/"
            className={
              props.cardStyle === 'row' ? 'link-highlight' : 'link-content'
            }
            onClick={() => {
              props.setCardStyle('row');
            }}
          >
            <FaThList />
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={
              props.cardStyle === 'col' ? 'link-highlight' : 'link-content'
            }
            onClick={() => {
              props.setCardStyle('col');
            }}
          >
            <FaThLarge />
          </a>
        </li>
      </ul>
      {/* ------------------------------------排序 */}
      <div className="mb-2">
        <Dropdown>
          <Dropdown.Toggle
            variant="white"
            id="dropdown-basic"
            className="text-highlight"
          >
            排序
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('hotSort');
              }}
            >
              熱門程度優先
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('newSort');
              }}
            >
              最新上架優先
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('cheapSort');
              }}
            >
              價錢由低至高
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('expensiveSort');
              }}
            >
              價錢由高至低
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
