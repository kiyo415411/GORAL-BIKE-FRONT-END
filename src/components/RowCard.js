import Image from '../images/CourseImg1.jpg';
import { BsStarFill, BsStar, BsHeart, BsHeartFill } from 'react-icons/bs';
const card = {
  image: Image,
  score: 5,
  like: 1,
  title: '台東縣-知本林道消暑秘境',
  price: '$22,000.00',
  time: '2022-07-16',
  location: '東部',
  statu: '報名開放中',
  text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
};
function RowCard() {
  return (
    <div class="card mb-3 col-7">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={card.image}
            class="img-fluid rounded-start"
            alt={card.title}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{card.title}</h5>
            <p class="card-text">{card.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
