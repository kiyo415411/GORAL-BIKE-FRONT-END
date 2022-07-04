import Color from '../Details/Color.js';
import Description from '../Details/Description.js';
import Name from '../Details/Name.js';
import Price from '../Details/Price.js';
import Like from '../Aside/Like.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config.js';

function BikeDetailDescription(props) {
  const [liked, setLiked] = useState([false]);
  const [colored, setColored] = useState([]);
  const [colorName, setColorName] = useState([]);
  useEffect(() => {
    const getColor = async () => {
      const response = await axios.get(
        API_URL + '/product/product_color_picker',
        {
          params: {
            product_id: props.product_id,
          },
        }
      );
      setColorName(response.data.color_name.split(','));
      setColored(response.data.hex_value.split(','));
    };
    getColor();
  }, []);
  useEffect(() => {
    // console.log(colorName);
  }, [colorName]);

  function separator(num) {
    let str = num.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
  }
  const [price] = useState(separator(props.bike[0].product_price));
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
        {colorName.length !== 0 ? (
          <>
            <hr />
            <p className="md-5">顏色</p>
            <Color
              color={colored}
              colorName={colorName}
              currentColor={props.currentColor}
              setCurrentColor={props.setCurrentColor}
            />
          </>
        ) : (
          ''
        )}
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
