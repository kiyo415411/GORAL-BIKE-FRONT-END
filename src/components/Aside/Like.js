import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function Like(props) {
  const [liked, setLiked] = useState(props.like);
  function liken(l) {
    if (l === false) {
      return (
        <BsHeart
          color="red"
          onClick={() => {
            setLiked(!liked);
          }}
        />
      );
    } else if (l === true) {
      return (
        <BsHeartFill
          color="red"
          onClick={() => {
            setLiked(!liked);
          }}
        />
      );
    }
  }
  return liken(liked);
}

export default Like;
