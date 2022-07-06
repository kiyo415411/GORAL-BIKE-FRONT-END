import { useState, useEffect } from 'react';
// import Like from './Like.js';
import { Link } from 'react-router-dom';
import { API_URL, IMAGE_URL } from '../../utils/config.js';
import { useLogin } from '../../utils/useLogin'; // user's data
import swal from 'sweetalert'; // Sweet Alert
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}
function BikeCard(props) {
  const [for5] = useState([1, 2, 3, 4, 5]);
  // const [liked, setLiked] = useState(false);
  const starPercentage = (props.rating / 5) * 100;

  // ---------------------------- favorite's data
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: 'product',
  });

  // ---------------------------- favorite's function
  function handleClick(e) {
    if (favorite.userId !== '') {
      setFavorite({ ...favorite, courseId: e.target.value });
    } else {
      swal('收藏失敗', '登入會員才能進行個人收藏。', 'warning');
    }
  }

  useEffect(() => {
    let postFavorite = async () => {
      try {
        await axios.post(`${API_URL}/member/favorite/update`, favorite);
      } catch (e) {
        console.error(e);
      }

      props.setFavoriteActive(!props.favoriteActive);
    };
    postFavorite();
  }, [favorite]);

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
            <img
              // src={require(`${IMAGE_URL}/bikes/${props.bike}`)}
              src={`${IMAGE_URL}/bikes/${props.bike}`}
              className="img-fluid rounded-start my-auto img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8 m-auto">
            <div className="text-warning ms-3 d-flex">
              {/* ahhhhhhhhhhhhhhhhhh rating */}
              {/* A+ Plan */}
              {/* Get rating */}
              {/* For loop the rating */}
              {/* Return svg */}
              {/* Great success */}
              {/* Realize react hates for loops */}
              {/* Sadge */}
              {/* Must use map */}
              {/* Possible hope of for looping a function */}
              {/* dasfdkasjlkjasdfljasdfjsakljsdklfjasklfjfj;asdfj;kjsdfkljas;fasfkjas;dfkljdjasfkldjaskfkdas;fjdkasfjasfkkdkldsjfkldjaskldjasfkljasd */}
              {/* <div
                style={{
                  position: 'absolute',
                  width: '80px',
                  height: '24px',
                  background: 'currentColor',
                }}
              ></div> */}
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
                        {/* possible progress bar */}

                        {/* <div
                          style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            width: { starPercentageRounded },
                            height: '24px',
                            background: 'currentColor',
                          }}
                        ></div> */}
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
                  {/* <Like liked={liked} setLiked={setLiked} /> */}
                  <Checkbox
                    icon={<BsHeart />}
                    checkedIcon={<BsHeartFill />}
                    size="large"
                    sx={{
                      color: 'var(--bs-highlight)',
                      '&.Mui-checked': {
                        color: 'var(--bs-highlight)',
                      },
                    }}
                    value={props.id}
                    checked={props.like !== null && props.like !== undefined}
                    onClick={handleClick}
                  />
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
