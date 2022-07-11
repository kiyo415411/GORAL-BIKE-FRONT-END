import { BsListUl } from 'react-icons/bs';
import { BiGridSmall } from 'react-icons/bi';
import BikeList from './BikeList.js';
import ProductAside from './ProductAside.js';
import { useState, useEffect } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';
import axios from 'axios';
import BikePaddy from './BIkePaddy';
import TopSort from './TopSort.js';
import NoData from './NoData.js';
import { useLogin } from '../../utils/useLogin'; // user's data
import useWindowSize from '../hooks/useWindowSize.js';
import { FiFilter } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ProductPage() {
  const mostExpensive = 500000;
  const leastExpensive = 0;
  const [bikeList, setBikeList] = useState(1);
  const [price, setPrice] = useState([leastExpensive, mostExpensive]);
  const [data, setData] = useState([]);
  const [colored, setColored] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cardStyle, setCardStyle] = useState('row');
  const [sortMethod, setSortMethod] = useState('product_id DESC');

  const [sortRWD, setSortRWD] = useState(false);

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

  const WindowSize = useWindowSize();

  //------------------------------- favorite's data
  const { userData } = useLogin(); // user's data
  const [favoriteActive, setFavoriteActive] = useState(true); // do favorite

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
      const response = await axios.get(`${API_URL}/product`);
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
          sortMethod: handleSubmit.sortMethod,
          favoriteActive: favoriteActive,
          userId: userData.userId,
        },
      });
      setData(response.data.data);
    };
    getProducts();
  }, [handleSubmit, favoriteActive, userData.userId]);

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
      console.log(category);
    };
    getCategory();
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

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="position-relative top-banner text-white overflow-hidden rounded-0 d-none d-lg-block">
        <img
          src={`${IMAGE_URL}/bikes/hero.png`}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
        <div className="card-img-overlay row align-items-center m-0 p-0">
          <div class="col-1"></div>
          <h1
            className="top-banner-title card-title fw-bolder col-sm-4 text-center text-white position-absolute"
            style={{ zIndex: '1' }}
          >
            登山車全車系
          </h1>
        </div>
      </div>
      {/* <div
        style={{ background: 'rgba(0,0,0,0.7)' }}
        className="w-100 h-100 position-fixed"
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
          setPage={setPage}
          className=""
        />
      </div> */}
      <div
        className={`px-0 mx-0 mt-5 pt-5 container-fluid row justify-content-md-center `}
      >
        <div className="col-2 mt-2 mx-auto">
          <div
            className="ms-2 sticky-sm-top d-none d-md-block shadow d-flex justify-content-center p-2"
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
              setPage={setPage}
              className="px-4 pb-2 mt-3 d-flex flex-column overflow-auto course-list-aside"
            />
          </div>
        </div>
        <div className={`mx-md-auto col-12 col-md-8 p-lg-0`}>
          <div className="d-flex justify-content-between">
            <div className="d-md-block d-none">
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
            <Button
              variant="primary"
              onClick={handleShow}
              className="d-block d-md-none"
            >
              <FiFilter
                color={bikeList === 0 ? 'FF7E55' : ''}
                size={50}
                onClick={() => {
                  setSortRWD(!sortRWD);
                }}
                style={{ cursor: 'pointer' }}
              />
            </Button>
            <h4 className="text-hightlight w-25 text-nowrap">
              <TopSort
                cardStyle={cardStyle}
                setCardStyle={setCardStyle}
                sortMethod={sortMethod}
                setSortMethod={setSortMethod}
              />
            </h4>
          </div>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div
                className="ms-2 sticky-sm-top d-flex justify-content-center p-2"
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
                  setPage={setPage}
                  className="px-4 pb-2 mt-3 d-flex flex-column overflow-auto course-list-aside"
                />
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          {data.length !== 0 ? (
            bikeList === 1 ? (
              <BikeList
                data={data}
                page={page}
                setPage={setPage}
                lastPage={lastPage}
                favoriteActive={favoriteActive}
                setFavoriteActive={setFavoriteActive}
              />
            ) : WindowSize < 768 ? (
              <BikeList
                data={data}
                page={page}
                setPage={setPage}
                lastPage={lastPage}
                favoriteActive={favoriteActive}
                setFavoriteActive={setFavoriteActive}
              />
            ) : (
              <BikePaddy
                data={data}
                page={page}
                setPage={setPage}
                lastPage={lastPage}
                favoriteActive={favoriteActive}
                setFavoriteActive={setFavoriteActive}
              />
            )
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
