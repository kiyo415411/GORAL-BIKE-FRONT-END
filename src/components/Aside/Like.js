import { BsHeartFill, BsHeart } from 'react-icons/bs';

function Like(props) {
  return props.liked ? (
    <BsHeartFill
      color="red"
      className={props.className}
      size={props.width}
      onClick={() => {
        props.setLiked(!props.liked);
      }}
      style={{ cursor: 'pointer' }}
    />
  ) : (
    <BsHeart
      color="red"
      className={props.className}
      size={props.width}
      onClick={() => {
        props.setLiked(!props.liked);
      }}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default Like;
