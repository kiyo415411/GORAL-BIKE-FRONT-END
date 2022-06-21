import { FaThLarge, FaThList } from 'react-icons/fa';
// import { AiFillCaretDown } from 'react-icons/ai';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
      {/* <a href="#/" className="text-highlight">
        商品排序 <AiFillCaretDown size={20} />
      </a> */}
      <div className="mb-2">
        <DropdownButton
          menuVariant="dark"
          as={ButtonGroup}
          key="end"
          id={`dropdown-button-drop-end`}
          drop="end"
          variant="white"
          title={`排序`}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
