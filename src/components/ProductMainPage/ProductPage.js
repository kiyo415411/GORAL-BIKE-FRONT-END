import { BsListUl } from 'react-icons/bs';
import { BiGridSmall } from 'react-icons/bi';
import BikeList from './BikeList.js';
import ProductAside from './ProductAside.js';
import { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';
import BikePaddy from './BikePaddy';
import TopSort from './TopSort.js';
import NoData from './NoData.js';

function ProductPage() {
  const mostExpensive = 500000;
  const leastExpensive = 0;
  const [bikeList, setBikeList] = useState(1);
  const [price, setPrice] = useState([leastExpensive, mostExpensive]);
  const [data, setData] = useState([]);
  const [colored, setColored] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  const [cardStyle, setCardStyle] = useState('row');
  const [sortMethod, setSortMethod] = useState('product_id DESC');

  const [currentColor, setCurrentColor] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [currentBrand, setCurrentBrand] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [handleSubmit, setHandleSubmit] = useState({
    category: currentCategory,
    brand: currentBrand,
    minPrice: price[0],
    maxPrice: price[1],
    color: currentColor,
    search: currentSearch,
    page: page,
    sortMethod: sortMethod,
  });

  useEffect(() => {
    const getLastPage = async () => {
      const response = await axios.get(API_URL + '/product', {
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

      setLastPage(response.data.pagination.lastPage);
    };
    getLastPage();
  }, [handleSubmit]);

  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(API_URL + '/product');
      setPage(response.data.pagination.page);
    };
    getPage();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(API_URL + '/product/product_category');
      // console.log(response.data);
      setCategory(response.data);
      setCategory((oldArray) => [
        { product_category_id: 0, product_category_name: '全部車款' },
        ...oldArray,
      ]);
    };
    getCategory();
    // console.log('category', category);
  }, []);

  useEffect(() => {
    console.log('LP', lastPage);
  }, [lastPage]);
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
      sortMethod: sortMethod,
    });
  }, [
    currentColor,
    price,
    currentCategory,
    currentBrand,
    currentSearch,
    page,
    sortMethod,
  ]);

  useEffect(() => {
    const getBikes = async () => {
      const response = await axios.get(API_URL + '/product');
      setData(response.data.data);
      console.log('DATA DATA', data);
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
          sortMethod: handleSubmit.sortMethod,
        },
      });
      setData(response.data.data);
    };
    getProducts();
  }, [handleSubmit]);

  return (
    <div className="container-fluid row my-5 justify-content-between">
      <div className="col-2 mt-2">
        <div
          className="ms-2 sticky-sm-top shadow d-flex justify-content-center p-2"
          style={{ width: '324px', height: '90vh' }}
        >
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
            category={category}
          />
        </div>
      </div>
      <div className="mx-5 col-9">
        <div className="d-flex justify-content-between">
          <div>
            <BsListUl
              size={30}
              color={bikeList === 1 ? 'FF7E55' : ''}
              onClick={() => {
                setBikeList(1);
              }}
              style={{ cursor: 'pointer' }}
            />
            <BiGridSmall
              color={bikeList === 0 ? 'FF7E55' : ''}
              size={50}
              onClick={() => {
                setBikeList(0);
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <h4 className="text-hightlight w-25 text-nowrap">
            <TopSort
              cardStyle={cardStyle}
              setCardStyle={setCardStyle}
              sortMethod={sortMethod}
              setSortMethod={setSortMethod}
            />
          </h4>
        </div>
        {data.length !== 0 ? (
          bikeList === 1 ? (
            <BikeList
              data={data}
              page={page}
              setPage={setPage}
              lastPage={lastPage}
            />
          ) : (
            <BikePaddy
              data={data}
              page={page}
              setPage={setPage}
              lastPage={lastPage}
            />
          )
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
