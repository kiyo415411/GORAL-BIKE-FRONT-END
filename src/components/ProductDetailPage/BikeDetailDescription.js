import Color from '../Details/Color.js';
import Description from '../Details/Description.js';
import Name from '../Details/Name.js';
import Price from '../Details/Price.js';
import Like from '../Aside/Like.js';
import { useState } from 'react';

function BikeDetailDescription(props) {
  const [liked, setLiked] = useState([false]);
  const [color] = useState([
    { color_value: '#32CE13' },
    { color_value: '#E0CF05' },
    { color_value: '#D3484F' },
    { color_value: '#6F6669' },
  ]);
  function separator(num) {
    let str = num.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }
  const [price] = useState(separator(props.bike[0].product_price));
  const [currentColor, setCurrentColor] = useState();
  return (
    <div width="478px" className={props.className}>
      <div>
        <div className="d-flex">
          <Name name={`${props.bike[0].product_name}`} />
          <Like
            liked={liked}
            setLiked={setLiked}
            className="my-auto ms-4"
            width="34"
          />
        </div>
        <hr />
        <Description desc="腳踏車改變了我的命運。腳踏車，發生了會如何，不發生又會如何。如果此時我們選擇忽略腳踏車，那後果可想而知。" />
        <hr />
        <Price price={`${price}`} />
        <hr />
        <p className="md-5">顏色</p>
        <Color
          color={color}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <hr />
        <div>
          <button className="btn border border-primary rounded-0 me-2">
            加入購物車
          </button>
          <button className="btn btn-primary rounded-0 ms-2">直接購買</button>
        </div>
      </div>
      {/* <p className="m-2 text-content">{bikeDetail[0].LongDesc}</p> */}
    </div>
  );
}

export default BikeDetailDescription;
