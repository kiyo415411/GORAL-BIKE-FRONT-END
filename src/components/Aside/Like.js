import { BsHeartFill, BsHeart } from 'react-icons/bs';

function Like(props) {
  return props.liked ? (
    <BsHeartFill
      color="var(--bs-highlight)"
      className={props.className}
      size={props.width}
      onClick={() => {
        props.setLiked(!props.liked);
      }}
      style={{ cursor: 'pointer' }}
    />
  ) : (
    <BsHeart
      color="var(--bs-highlight)"
      className={props.className}
      size={props.width}
      onClick={(e) => {
        props.setLiked(!props.liked);
        console.log(e.target.viewBox.animVal.width);
        e.target.viewBox.baseVal.width = `100px`;
        e.target.viewBox.baseVal.height = `100px`;
        //useless code but leads somewhere
      }}
      style={{
        cursor: 'pointer',
      }}
    />
  );
}

export default Like;
