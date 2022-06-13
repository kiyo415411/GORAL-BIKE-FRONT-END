import './App.css';
import Navbar from './layout/Public/NavBar';
import Map from './layout/Map';
import Index from './layout/Home/index';
import Footer from './layout/Public/Footer';
// ----------------------活動
import ActivityList from './pages/ActivityList';
import ActivityLike from './pages/ActivityLike';
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
        <Route path="/" element={<Index />} />
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<App />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/courselike" element={<CourseLike />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/activitylist" element={<ActivityList />} />
        <Route path="/activitylike" element={<ActivityLike />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
