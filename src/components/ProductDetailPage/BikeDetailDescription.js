import Color from '../Details/Color.js';
import Description from '../Details/Description.js';
import Name from '../Details/Name.js';
import Price from '../Details/Price.js';
// import Like from '../Aside/Like.js';
import { useState, useEffect } from 'react';
// ------------------------------------ favorite's tool
import Checkbox from '@mui/material/Checkbox';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useLogin } from '../../utils/useLogin';
import swal from 'sweetalert';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useProductCart } from '../../utils/useProductCart';
import { Link } from 'react-router-dom';
// IMG PROBLEM ADFASDFASFL
// $COLOR INSTEAD OF IMG NAME $COLOR
function BikeDetailDescription(props) {
  // const [liked, setLiked] = useState([false]);
  const [colored, setColored] = useState([]);
  const [colorName, setColorName] = useState([]);
  const [shoppingClick, setShoppingClick] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShoppingClick(false);
    }, [1000]);
  });
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
      if (
        response.data.color_name !== null &&
        response.data.hex_value !== null
      ) {
        setColorName(response.data.color_name.split(','));
        setColored(response.data.hex_value.split(','));
      }
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

  const productCart = useProductCart();
  const { addItem } = productCart;
  const [price] = useState(separator(props.bike[0].product_price));

  // -------------------------- favorite's tool
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: 'product',
  });

  function handleClick(e) {
    console.log(e.target.value);
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
    <div width="478px" className={props.className}>
      <div>
        <div className="d-flex">
          <Name name={`${props.bike[0].product_name}`} />
          {/* <Like
            liked={liked}
            setLiked={setLiked}
            className="my-auto ms-4"
            width="34"
          /> */}
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
            value={props.bike[0].product_id}
            checked={
              props.bike[0].favorite_is !== null &&
              props.bike[0].favorite_is !== undefined
            }
            onClick={handleClick}
          />
        </div>
        <hr />
        <Description desc={props.bike[0].product_description} />
        {/* <Description desc="腳踏車改變了我的命運。腳踏車，發生了會如何，不發生又會如何。如果此時我們選擇忽略腳踏車，那後果可想而知。" /> */}
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
          <button
            className={`btn border-primary rounded-0 px-4 ${
              shoppingClick === true ? 'bg-success text-white border-white' : ''
            }`}
            onClick={() => {
              addItem({
                id: props.id,
                name: props.bike[0].product_name,
                image: props.img,
                price: props.bike[0].product_price,
                quantity: 1,
              });
              setShoppingClick(shoppingClick === true ? false : true);
            }}
          >
            加入購物車
          </button>
          <Link to="/shopping-cart">
            <button
              className="btn btn-primary rounded-0 ms-2"
              onClick={() => {
                addItem({
                  id: props.id,
                  name: props.bike[0].product_name,
                  image: props.img,
                  price: props.bike[0].product_price,
                  quantity: 1,
                });
              }}
            >
              直接購買
            </button>
          </Link>
        </div>
      </div>
      {/* <p className="m-2 text-content">{bikeDetail[0].LongDesc}</p> */}
    </div>
  );
}

export default BikeDetailDescription;
