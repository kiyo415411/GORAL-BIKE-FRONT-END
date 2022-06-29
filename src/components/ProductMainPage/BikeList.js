import BikeCard from './BikeCard.js';
import Pagination from './Pagination.js';

function BikeList(props) {
  return (
    <ul className="list-unstyled row">
      {props.data.map((item, index) => {
        return (
          <li
            key={item.product_id}
            className="col-12 col-md-8 col-lg-12 mx-auto"
          >
            <BikeCard
              bike={item.product_images}
              name={item.product_name}
              like={false}
              price={item.product_price}
              text={
                '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。'
              }
              rating={item.product_rating}
              id={item.product_id}
            />
          </li>
        );
      })}
      <div className="d-flex justify-content-center">
        <Pagination
          className=""
          page={props.page}
          setPage={props.setPage}
          lastPage={props.lastPage}
        />
      </div>
    </ul>
  );
}
export default BikeList;
