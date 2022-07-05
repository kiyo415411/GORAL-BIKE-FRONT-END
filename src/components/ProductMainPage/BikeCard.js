import { useState } from 'react';
import Like from '../Aside/Like.js';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config.js';
import DecimalStar from './DecimalStar.js';
import { useProductCart } from '../../utils/useProductCart.js';
import NoData from './NoData.js';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}
function BikeCard(props) {
  const productCart = useProductCart();
  const { addItem } = productCart;
  const [for5] = useState([1, 2, 3, 4, 5]);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div
        className="card shadow p-2 mb-5 bg-body rounded"
        style={{ Width: '1049px', minHeight: '256px' }}
      >
        <div className="row g-0 justify-content-center my-auto align-items-center">
          <div
            className="col-4 h-75 my-auto overflow-hidden"
            style={{ width: 328, height: 220 }}
          >
            <Link to={`/product/detail/${props.id}`}>
              <img
                src={`${IMAGE_URL}/bikes/${props.bike}`}
                className="img-fluid rounded-start my-auto img-fluid"
                alt="..."
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <div className=" ms-3 d-flex gap-2">
              <div className="text-warning d-flex align-items-center">
                {for5.map((x, i) => {
                  return <DecimalStar x={x} rating={props.rating} key={i} />;
                })}
              </div>
              <p className="m-0">{props.rating}</p>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-1 mb-3">
                  <Link to={`/product/detail/${props.id}`}>
                    <h5 className="card-title m-0">{props.name}</h5>
                  </Link>
                  <Like liked={liked} setLiked={setLiked} />
                </div>
                <h5 className="text-content">${separator(props.price)}</h5>
              </div>
              <p className="card-text text-subcontent">
                <small>{props.text}</small>
              </p>
              <div className="flex">
                <button className="btn btn-primary rounded-pill px-4 me-2">
                  直接購買
                </button>
                <button
                  className="btn border-primary rounded-pill px-4"
                  onClick={() => {
                    addItem({
                      id: props.id,
                      name: props.name,
                      image: props.bike,
                      price: props.price,
                      quantity: 1,
                    });
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeCard;
