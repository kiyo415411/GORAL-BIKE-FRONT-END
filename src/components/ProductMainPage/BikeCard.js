import { useState } from 'react';
import Like from './Like.js';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config.js';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}
function BikeCard(props) {
  const [for5] = useState([1, 2, 3, 4, 5]);
  const [liked, setLiked] = useState(false);
  const starPercentage = (props.rating / 5) * 100;

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
                // src={require(`${IMAGE_URL}/bikes/${props.bike}`)}
                src={`${IMAGE_URL}/bikes/${props.bike}`}
                className="img-fluid rounded-start my-auto img-fluid"
                alt="..."
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <div className="text-warning ms-3 d-flex">
              {for5.map((x, i) => {
                return (
                  <ul key={i} className="p-0">
                    {x <= props.rating ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    )}
                  </ul>
                );
              })}
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

export default BikeCard;
