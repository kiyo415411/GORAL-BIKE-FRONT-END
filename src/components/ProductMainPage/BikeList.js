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
              bike={item.product_images.replace(/ /g, '%20')}
              name={item.product_name}
              like={false}
              price={item.product_price}
              text={
                '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。'
              }
            />
          </li>
        );
      })}
      <Pagination page={1} setPage={1} lastPage={10} />
    </ul>
  );
}
export default BikeList;
