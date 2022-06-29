import './App.css';
import Navbar from './layout/Public/NavBar';
import Map from './layout/Map';
import MapDetail from './layout/MapDetail';
import Index from './layout/Home/index';
import Footer from './layout/Public/Footer';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ActivityList from './pages/ActivityList';
import ActivityLike from './pages/ActivityLike';
import ActivityDetail from './pages/ActivityDetail';
import CourseList from './pages/CourseList';
import CourseLike from './pages/CourseLike';
import CourseDetail from './pages/CourseDetail';
import { Routes, Route } from 'react-router-dom';
// ----------------------context
import { ProductCartProvider } from './utils/useProductCart';
import { CourseCartProvider } from './utils/useCourseCart';
import { ActivityCartProvider } from './utils/useActivityCart';
import { CartProvider } from './utils/useCart';
// ----------------------組合用元件
import ScrollToTop from './components/ScrollToTop';

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

const course = [
  {
    id: 1,
    name: '初階課程',
    image: 'BIG_NINE_15.jpg',
    price: 6000,
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: '進階課程',
    image: 'BIG_NINE_15.jpg',
    price: 4000,
    quantity: 1,
    checked: false,
  },
];
const activities = [
  {
    id: 1,
    name: '小活動',
    image: 'BIG_NINE_15.jpg',
    price: 2000,
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: '大活動',
    image: 'BIG_NINE_15.jpg',
    price: 2000,
    quantity: 1,
    checked: false,
  },
];

// 測試屬性 initialCartItems={products}
function App() {
  return (
    <>
      <ActivityCartProvider
        localStorageKey="activityCart"
        // initialCartItems={activities}
      >
        <CourseCartProvider
          localStorageKey="courseCart"
          // initialCartItems={course}
        >
          <ProductCartProvider>
            <CartProvider>
              <Navbar />
              <ScrollToTop>
                <Routes>
                  <Route
                    path="/shopping-cart/checkout"
                    element={<Checkout />}
                  />
                  <Route path="/shopping-cart" element={<ShoppingCart />} />
                  <Route path="/map" element={<Map />} />
                  <Route path="/course/:courseId" element={<CourseDetail />} />
                  <Route path="/course/like" element={<CourseLike />} />
                  <Route path="/course" element={<CourseList />} />
                  <Route
                    path="/activity/:courseId"
                    element={<ActivityDetail />}
                  />
                  <Route path="/activity/like" element={<ActivityLike />} />
                  <Route path="/activity" element={<ActivityList />} />
                  <Route exact path="/" element={<Index />} />
                </Routes>
              </ScrollToTop>
              <Footer />
            </CartProvider>
          </ProductCartProvider>
        </CourseCartProvider>
      </ActivityCartProvider>
    </>
  );
}

export default App;
