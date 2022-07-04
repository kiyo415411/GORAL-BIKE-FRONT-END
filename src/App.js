import './App.css';
import 'animate.css';
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
import ActivityDetail from './pages/ActivityDetail';
import Member from './pages/Member';

// ----------------------課程
import CourseList from './pages/CourseList';
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
    name: 'BIG_NINE_200',
    image: 'BIG_NINE_200.jpg',
    price: 12000,
    quantity: 1,
    checked: false,
  },
];

// 測試屬性 initialCartItems={products}
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    userId: 0,
    email: '',
    name: '',
    phone: '',
    photo: '',
  });
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
          name: login.name,
          phone: login.phone,
          photo: login.photo,
        });

        // if (!login.status) {
        //   localStorage.setItem('fav', '');
        //   setFavItemsArr([]);
        //   localStorage.setItem('cartList', '');
        //   setCartListData([]);
        // }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [isLogin]);

  return (
    <>
      <LoginContext.Provider
        value={{ isLogin, setIsLogin, userData, setUserData }}
      >
        <ActivityCartProvider localStorageKey="activityCart">
          <CourseCartProvider localStorageKey="courseCart">
            <ProductCartProvider initialCartItems={products}>
              <CartProvider>
                <Navbar />
                <Routes>
                  <Route path="/member" element={<Member />} />
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
                  <Route
                    path="/product/detail/:product_id"
                    element={<BikeDetailPage />}
                  />
                  <Route path="/course/detail" element={<CourseDetail />} />
                  <Route path="/course" element={<CourseList />} />
                  <Route
                    path="/activity/:courseId"
                    element={<ActivityDetail />}
                  />
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
