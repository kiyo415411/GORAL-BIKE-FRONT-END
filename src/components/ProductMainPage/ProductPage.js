import { BsListUl } from 'react-icons/bs';
import { BiGridSmall } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import BikeList from './BikeList.js';
import ProductAside from './ProductAside.js';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

function ProductPage() {
  const mostExpensive = 500000;
  const leastExpensive = 0;
  const [price, setPrice] = useState([leastExpensive, mostExpensive]);
  const [data, setData] = useState([]);
  const [colored, setColored] = useState([]);
  const [brand, setBrand] = useState([
    { brand_id: 0, brand_name: 'All Brands' },
  ]);

  const [currentColor, setCurrentColor] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [currentBrand, setCurrentBrand] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [handleSubmit, setHandleSubmit] = useState({
    category: currentCategory,
    brand: currentBrand,
    minPrice: price[0],
    maxPrice: price[1],
    color: currentColor,
    search: currentSearch,
    page: page,
  });
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const getLastPage = async () => {
      const response = await axios.get(API_URL + '/product');
      setLastPage(response.data.pagination.lastPage);
    };
    getLastPage();
  }, []);

  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(API_URL + '/product');
      setPage(response.data.pagination.page);
    };
    getPage();
  }, []);

  // send page to backend

  //----------
  //----------
  //----------
  //----------

  useEffect(() => {
    const getColor = async () => {
      const response = await axios.get(API_URL + '/product/product_color');
      setColored(response.data.data);
    };
    getColor();
  }, []);

  useEffect(() => {
    const getBrand = async () => {
      const response = await axios.get(API_URL + '/product/product_brand');
      setBrand(response.data);
      setBrand((oldArray) => [
        { brand_id: 0, brand_name: 'All Brands' },
        ...oldArray,
      ]);
    };
    getBrand();
  }, []);

  useEffect(() => {
    setHandleSubmit({
      category: currentCategory,
      brand: currentBrand,
      minPrice: price[0],
      maxPrice: price[1],
      color: currentColor,
      search: currentSearch,
      page: page,
    });
  }, [currentColor, price, currentCategory, currentBrand, currentSearch, page]);

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
          category: handleSubmit.category,
          brand: handleSubmit.brand,
          minPrice: handleSubmit.minPrice,
          maxPrice: handleSubmit.maxPrice,
          color: handleSubmit.color,
          search: handleSubmit.search,
          page: handleSubmit.page,
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
            currentColor={currentColor}
            brand={brand}
            setBrand={setBrand}
            setCurrentCategory={setCurrentCategory}
            setCurrentBrand={setCurrentBrand}
            setCurrentColor={setCurrentColor}
            setCurrentSearch={setCurrentSearch}
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
          <BikeList
            data={data}
            page={page}
            setPage={setPage}
            lastPage={lastPage}
          />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
