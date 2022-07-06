import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import News from '../layout/News';
import ShoppingCart from '../pages/ShoppingCart';
import NewsDetail from '../pages/NewsDetail';
import Map from '../layout/Map';
import MapDetail from '../layout/MapDetail';
import CourseDetail from '../pages/CourseDetail';
import CourseList from '../pages/CourseList';
import BikeDetailPage from '../components/ProductDetailPage/BikeDetailPage';
import ProductPage from '../components/ProductMainPage/ProductPage';
import ActivityList from '../pages/ActivityList';
import ActivityDetail from '../pages/ActivityDetail';
import Member from '../pages/Member';

export default function MainLayoutRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/member/favorite" element={<Member />} />
        <Route path="/member" element={<Member />} />
        <Route path="/shopping-cart/checkout" element={<Checkout />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsID" element={<NewsDetail />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map/mapDetail/:mapName" element={<MapDetail />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/product/detail/:product_id"
          element={<BikeDetailPage />}
        />
        <Route path="/course/detail" element={<CourseDetail />} />
        <Route path="/course" element={<CourseList />} />
        <Route path="/activity/:courseId" element={<ActivityDetail />} />
        <Route path="/activity" element={<ActivityList />} />
      </Routes>
    </React.Fragment>
  );
}
