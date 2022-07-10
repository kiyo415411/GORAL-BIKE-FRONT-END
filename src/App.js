import './App.css';
import 'animate.css';
import { Outlet } from 'react-router-dom';
import MainLayoutRoutes from './Router/MainLayuotRoutes';
import PageWithoutHeaderOrFooter from './Router/PageWithoutHeaderOrFooter';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layout/Public/NavBar';
import Footer from './layout/Public/Footer';
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

import Index from './layout/Home';
import ChatBot from './pages/ChatBot';

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

function BasicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ChatBot />
      <Footer />
    </>
  );
}

function CustomLayout() {
  return (
    <>
      <Outlet />
      <ChatBot />
    </>
  );
}

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
            <ProductCartProvider>
              <CartProvider>
                <Routes>
                  <Route path="/" element={<BasicLayout />}>
                    <Route index path="/" element={<Index />} />
                    <Route path="*" element={<MainLayoutRoutes />} />
                  </Route>
                  <Route path="/CustomePages" element={<CustomLayout />}>
                    <Route path="*" element={<PageWithoutHeaderOrFooter />} />
                  </Route>
                </Routes>
              </CartProvider>
            </ProductCartProvider>
          </CourseCartProvider>
        </ActivityCartProvider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
