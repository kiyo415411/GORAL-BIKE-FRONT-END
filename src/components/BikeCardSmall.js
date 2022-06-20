import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Like from './Aside/Like.js';
import { Link } from 'react-router-dom';
function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}

function BikeCardSmall(props) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div
        className="card shadow p-2 mb-5 bg-body rounded container"
        style={{ width: '400px' }}
      >
        <div className="row">
          <div className="my-auto">
            <img
              src={require('../images/bikes/' + props.bike + '.png')}
              className="img-fluid rounded-start my-auto"
              alt="..."
            />
          </div>
          <div className="m-auto">
            <div className="card-body">
              <div className="">
                <div className="mb-3">
                  <Link to="/Product/Detail" className="">
                    <h5 className="card-title m-0">{props.name}</h5>
                  </Link>
                  {/* <{like(liked)}> */}
                  <Like liked={liked} setLiked={setLiked} />
                </div>
                <h5 className="text-content">${separator(props.price)}</h5>
              </div>
              <p className="card-text text-subcontent">
                <small>{props.text}</small>
              </p>
              <div className="">
                <button className="btn btn-primary rounded-pill px-4 me-2">
                  直接購買
                </button>
                <button className="btn border-primary rounded-pill px-4">
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

export default BikeCardSmall;
