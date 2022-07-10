import BikePaddyCard from './BikePaddyCard.js';
import Pagination from './Pagination.js';
import useWindowSize from '../hooks/useWindowSize.js';

export default function BikePaddy(props) {
  let WindowSize = useWindowSize();
  return (
    <ul className="list-unstyled row">
      {props.data.map((item, index) => {
        return (
          <li
            key={item.product_id}
            className={`col-${
              WindowSize < 1730 ? (WindowSize < 1150 ? '12' : '6') : '4'
            }`}
          >
            <BikePaddyCard
              img={item.product_images}
              name={item.product_name}
              like={item.favorite_is}
              price={item.product_price}
              text={item.product_description}
              rating={item.product_rating}
              id={item.product_id}
              favoriteActive={props.favoriteActive}
              setFavoriteActive={props.setFavoriteActive}
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
