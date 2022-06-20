import { BsHeartFill, BsHeart } from 'react-icons/bs';

function Like(props) {
  return props.liked ? (
    <BsHeartFill
<<<<<<< HEAD
      color="red"
=======
      color="hightlight"
>>>>>>> develope
      className={props.className}
      size={props.width}
      onClick={() => {
        props.setLiked(!props.liked);
      }}
<<<<<<< HEAD
      style={{ cursor: 'pointer' }}
    />
  ) : (
    <BsHeart
      color="red"
=======
    />
  ) : (
    <BsHeart
      color="hightlight"
>>>>>>> develope
      className={props.className}
      size={props.width}
      onClick={() => {
        props.setLiked(!props.liked);
      }}
<<<<<<< HEAD
      style={{ cursor: 'pointer' }}
    />
  );
}
// if (props.liked === false) {
//   return (
//     <BsHeart
//       color="red"
//       className={props.className}
//       size={props.width}
//       onClick={() => {
//         props.setLiked(!props.liked);
//       }}
//     />
//   );
// } else {
//   return (
//     <BsHeartFill
//       color="red"
//       className={props.className}
//       size={props.width}
//       onClick={() => {
//         props.setLiked(!props.liked);
//       }}
//     />
//   );
// }

// SELECT asdf WHERE
=======
    />
  );
}
>>>>>>> develope

export default Like;
