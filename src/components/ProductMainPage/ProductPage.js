import { BsListUl } from 'react-icons/bs';
import { BiGridSmall } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import BikeList from './BikeList.js';
import ProductAside from './ProductAside.js';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import { color } from '@mui/system';

function ProductPage() {
  const mostExpensive = 200000;
  const leastExpensive = 0;
  const [price, setPrice] = useState([leastExpensive, mostExpensive]);
  const [data, setData] = useState([]);
  const [colored, setColored] = useState([]);
  const [currentColor, setCurrentColor] = useState('bogo');
  const [handleSubmit, setHandleSubmit] = useState({
    minPrice: price[0],
    maxPrice: price[1],
    color: currentColor,
  });
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(10);

  useEffect(() => {
    const getColor = async () => {
      const response = await axios.get(API_URL + '/product/product_color');
      setColored(response.data.data);
    };
    getColor();
  }, []);

  // name
  useEffect(() => {
    setHandleSubmit({
      minPrice: price[0],
      maxPrice: price[1],
      color: currentColor,
    });
  }, [currentColor, price]);

  useEffect(() => {
    const getBikes = async () => {
      const response = await axios.get(API_URL + '/product');
      setData(response.data.data);
    };
    getBikes();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`${API_URL}/product`, {
        params: {
          minPrice: handleSubmit.minPrice,
          maxPrice: handleSubmit.maxPrice,
          color: handleSubmit.color,
        },
      });
      setData(response.data.data);
    };
    getProducts();
  }, [handleSubmit]);
  return (
    <>
      <div className="d-flex justify-content-around mx-auto mt-4">
        <div className="w-25 d-flex justify-content-center">
          <ProductAside
            price={price}
            setPrice={setPrice}
            setHandleSubmit={setHandleSubmit}
            handleSubmit={handleSubmit}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            color={colored}
          />
        </div>
        <div className="w-75 mx-5">
          <div className="d-flex justify-content-between">
            <div>
              <BsListUl size={30} color="FF7E55" />
              <BiGridSmall size={50} />
            </div>
            <h4 className="text-hightlight">
              商品排序 <AiFillCaretDown size={30} />
            </h4>
          </div>
          {/* list of bikes */}
          <BikeList data={data} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
