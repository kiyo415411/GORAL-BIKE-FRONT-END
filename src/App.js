import './App.css';
import Navbar from './layout/Public/NavBar';
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
// ----------------------context
import { ProductCartProvider } from './utils/useProductCart';

// 測試先將 checked:false 塞入陣列，正式會在 addItem 的時候加入 checked 屬性
const products = [
  {
    id: 1,
    name: 'BIG_NINE_15',
    image: 'BIG_NINE_15.jpg',
    price: 22000,
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: 'BIG_NINE_13',
    image: 'BIG_NINE_15.jpg',
    price: 12000,
    quantity: 1,
    checked: false,
  },
];

// 測試屬性 initialCartItems={products}
function App() {
  return (
    <>
      <ProductCartProvider initialCartItems={products}>
        <Navbar />
        <Routes>
          <Route path="/shopping-cart/checkout" element={<Checkout />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/map" element={<Map />} />
          <Route path="/course/detail" element={<CourseDetail />} />
          <Route path="/course/like" element={<CourseLike />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/activity/detail" element={<ActivityDetail />} />
          <Route path="/activity/like" element={<ActivityLike />} />
          <Route path="/activity" element={<ActivityList />} />
          <Route exact path="/" element={<Index />} />
        </Routes>
        <Footer />
      </ProductCartProvider>
    </>
  );
}

export default App;
