import BikeCard from './BikeCard.js';
import Pagination from './Pagination.js';
import setWindowSize from '../hooks/useWindowSize';

function BikeList(props) {
  let WindowSize = setWindowSize();
  return (
    <ul className="list-unstyled row mx-auto">
      {props.data.map((item, index) => {
        return (
          <li key={item.product_id} className="col-12 p-1 col-lg-12 mx-md-auto">
            <BikeCard
              bike={item.product_images}
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
          page={props.page}
          setPage={props.setPage}
          lastPage={props.lastPage}
        />
      </div>
    </ul>
  );
}
export default BikeList;
