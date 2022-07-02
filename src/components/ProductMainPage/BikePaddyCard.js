import { useState } from 'react';
import Like from './Like.js';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config.js';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}
function BikePaddyCard(props) {
  const [liked, setLiked] = useState(false);
  const img = props.img;
  return (
    <>
      <div
        className="card shadow mb-5 bg-body rounded container"
        style={{ width: '400px', height: '450px' }}
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

export default BikePaddyCard;
