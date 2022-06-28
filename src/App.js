import './App.css';
import Navbar from './layout/Public/NavBar';
// import Index from './layout/Home';
import ProductPage from './components/ProductMainPage/ProductPage';
import BikeDetailPage from './components/ProductDetailPage/BikeDetailPage';
import Map from './layout/Map';
import Index from './layout/Home/index';
import Footer from './layout/Public/Footer';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
// ----------------------活動
import ActivityList from './pages/ActivityList';
import ActivityLike from './pages/ActivityLike';
import ActivityDetail from './pages/ActivityDetail';
// ----------------------課程
import CourseList from './pages/CourseList';
import CourseLike from './pages/CourseLike';
import CourseDetail from './pages/CourseDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/shopping-cart/checkout" element={<Checkout />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/map" element={<Map />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/detail/:product_id" element={<BikeDetailPage />} />
        <Route path="/course/detail" element={<CourseDetail />} />
        <Route path="/course/like" element={<CourseLike />} />
        <Route path="/course" element={<CourseList />} />
        <Route path="/activity/detail" element={<ActivityDetail />} />
        <Route path="/activity/like" element={<ActivityLike />} />
        <Route path="/activity" element={<ActivityList />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
