import Dropdown from 'react-bootstrap/Dropdown';
export default function TopSort(props) {
  return (
    <div className="d-flex justify-content-end px-3 align-items-center">
      <div className="">
        <Dropdown>
          <Dropdown.Toggle
            variant="white"
            id="dropdown-basic"
            className="text-highlight fs-4 my-auto"
          >
            商品排序
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('product_id ASC');
              }}
            >
              依商品升幂排序
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod(`product_id DESC`);
              }}
            >
              依商品降幂排序
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('product_price ASC');
              }}
            >
              依價錢升幂排序
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('product_price DESC');
              }}
            >
              依價錢降幂排序
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
