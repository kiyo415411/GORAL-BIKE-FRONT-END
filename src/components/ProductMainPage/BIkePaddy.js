import BikePaddyCard from './BikePaddyCard.js';
import Pagination from './Pagination.js';

export default function BikePaddy(props) {
  return (
    <ul className="list-unstyled row">
      {props.data.map((item, index) => {
        return (
          <li key={item.product_id} className="col-4 col-md-4 col-lg-4 mx-auto">
            <BikePaddyCard
              img={item.product_images}
              name={item.product_name}
              like={false}
              price={item.product_price}
              text={item.product_description}
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
