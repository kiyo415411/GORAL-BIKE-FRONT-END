import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function StarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  return (
    <div className={props.className}>
      {/* {[...Array[5]].map(() => {
        return ( */}
      {arr.map((v, i) => {
        const ratingValue = i + 1;
        return (
          <label style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name="rating"
              style={{ display: 'none' }}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            />
          </label>
        );
      })}
      {/* );
      })} */}
    </div>
  );
}

export default StarRating;
