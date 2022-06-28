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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
