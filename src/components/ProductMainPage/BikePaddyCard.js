import { useState, useEffect } from 'react';
import Like from './Like.js';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config.js';
import { useProductCart } from '../../utils/useProductCart.js';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}
function BikePaddyCard(props) {
  const productCart = useProductCart();
  const { addItem } = productCart;
  const [liked, setLiked] = useState(false);
  const img = props.img;
  const [shoppingClick, setShoppingClick] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShoppingClick(false);
    }, [1000]);
  });
  return (
    <>
      <div
        className="card shadow mb-5 bg-body rounded container pt-5"
        style={{ width: '400px', height: '500px' }}
      >
        <div className="row">
          <div className="mx-auto d-flex justify-content-center">
            <img
              src={`${IMAGE_URL}/bikes/${img.replace(/ /g, '%20')}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="m-auto">
            <div
              className="card-body"
              style={{ position: 'absolute', bottom: '10px' }}
            >
              <div>
                <div className="mb-3 d-flex gap-2">
                  <Link to="/Product/Detail">
                    <h5 className="card-title m-0">{props.name}</h5>
                  </Link>
                  {/* <{like(liked)}> */}
                  <Like className="my-auto" liked={liked} setLiked={setLiked} />
                </div>
                <h5 className="text-content">${separator(props.price)}</h5>
              </div>
              <p className="card-text text-subcontent"></p>
              <div>
                <button className="btn btn-primary rounded-pill px-4 me-2">
                  直接購買
                </button>
                <button
                  className={`btn border-primary rounded-pill px-4 ${
                    shoppingClick === true
                      ? 'bg-success text-white border-white'
                      : ''
                  }`}
                  onClick={() => {
                    addItem({
                      id: props.id,
                      name: props.name,
                      image: props.img,
                      price: props.price,
                      quantity: 1,
                    });
                    setShoppingClick(shoppingClick === true ? false : true);
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

function AddedToCart() {
  return (
    <div
      style={{
        background: '#CCCCCC',
        height: '100vh',
        width: '100vh',
        zIndex: '100',
      }}
    >
      <div style={{ background: '#fff' }} className="m-auto">
        Added to cart
      </div>
    </div>
  );
}
export default BikePaddyCard;
