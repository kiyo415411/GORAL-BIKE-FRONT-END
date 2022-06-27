import './App.css';
import Navbar from './layout/Public/NavBar';
import Map from './layout/Map';
import MapDetail from './layout/MapDetail';
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
import ScrollToTop from './components/ScrollToTop';
// ---------------------- context
import { LoginContext } from './utils/useLogin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './utils/config';

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
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/shopping-cart/checkout" element={<Checkout />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/map" element={<Map />} />
            <Route path="/course/like" element={<CourseLike />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/course" element={<CourseList />} />
            <Route path="/activity/like" element={<ActivityLike />} />
            <Route path="/activity/:courseId" element={<ActivityDetail />} />
            <Route path="/activity" element={<ActivityList />} />
            <Route exact path="/" element={<Index />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Map/MapDetail/:mapName" element={<MapDetail />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </LoginContext.Provider>
    </>
  );
}

export default App;
