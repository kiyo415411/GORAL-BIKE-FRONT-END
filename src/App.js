import './App.css';
import Navbar from './layout/Public/NavBar';
import Map from './layout/Map';
import Index from './layout/Home/index';
import Footer from './layout/Public/Footer';
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
        <Route path="/map" element={<Map />} />
        <Route path="/course" element={<CourseList />} />
        <Route path="/course/like" element={<CourseLike />} />
        <Route path="/course/detail" element={<CourseDetail />} />
        <Route path="/activity/detail" element={<ActivityDetail />} />
        <Route path="/activity/like" element={<ActivityLike />} />
        <Route path="/activity" element={<ActivityList />} />
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
