import './App.css';
import Navbar from './layout/Public/NavBar';
// import Index from './layout/Home';
import ProductPage from './components/ProductMainPage/ProductPage';
import BikeDetailPage from './components/ProductDetailPage/BikeDetailPage';
import Map from './layout/Map';
import MapDetail from './layout/MapDetail';
import Index from './layout/Home/index';
import Footer from './layout/Public/Footer';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ActivityList from './pages/ActivityList';
import ActivityLike from './pages/ActivityLike';
import ActivityDetail from './pages/ActivityDetail';

// ----------------------課程
import CourseList from './pages/CourseList';
import CourseLike from './pages/CourseLike';
import CourseDetail from './pages/CourseDetail';

import News from './layout/News';
import NewsDetail from './pages/NewsDetail';
import { Routes, Route } from 'react-router-dom';
// ----------------------context
import { ProductCartProvider } from './utils/useProductCart';
import { CourseCartProvider } from './utils/useCourseCart';
import { ActivityCartProvider } from './utils/useActivityCart';
import { CartProvider } from './utils/useCart';
// ----------------------組合用元件
// import ScrollToTop from './components/ScrollToTop';
// ---------------------- context
import { LoginContext } from './utils/useLogin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './utils/config';

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
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({ userId: '' });
  useEffect(() => {
    (async () => {
      try {
        // api/login
        // 判斷用戶是否有登入，且是否為admin
        const checkStatus = await axios.get(`${API_URL}/session/user`, {
          withCredentials: true,
        });
        const login = checkStatus.data;
        setIsLogin(true);
        setUserData({
          userId: login.user_id,
          email: login.email,
        });

        // if (!login.status) {
        //   localStorage.setItem('fav', '');
        //   setFavItemsArr([]);
        //   localStorage.setItem('cartList', '');
        //   setCartListData([]);
        // }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isLogin]);

  return (
    <>
      <LoginContext.Provider
        value={{ isLogin, setIsLogin, userData, setUserData }}
      >
        <ActivityCartProvider
          localStorageKey="activityCart"
          initialCartItems={activities}
        >
          <CourseCartProvider
            localStorageKey="courseCart"
            initialCartItems={course}
          >
            <ProductCartProvider>
              <CartProvider>
                <Navbar />
                <Routes>
                  <Route
                    path="/shopping-cart/checkout"
                    element={<Checkout />}
                  />
                  <Route path="/shopping-cart" element={<ShoppingCart />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/news/:newsID" element={<NewsDetail />} />
                  <Route path="/map" element={<Map />} />
                  <Route
                    path="/map/mapDetail/:mapName"
                    element={<MapDetail />}
                  />
                  <Route path="/course/:courseId" element={<CourseDetail />} />
                  <Route path="/product" element={<ProductPage />} />
                  <Route path="/product/detail/:product_id" element={<BikeDetailPage />} />
                  <Route path="/course/detail" element={<CourseDetail />} />
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

                <Footer />
              </CartProvider>
            </ProductCartProvider>
          </CourseCartProvider>
        </ActivityCartProvider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
