import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Public/NavBar';
import Footer from './layout/Public/Footer';
// ----------------------活動
import ActivityList from './pages/ActivityList';
import ActivityLike from './pages/ActivityLike';
// ----------------------課程
import CourseList from './pages/CourseList';
import CourseLike from './pages/CourseLike';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="courselist" element={<CourseList />} />
          <Route path="courselike" element={<CourseLike />} />
          <Route path="coursedetail" element={<CourseDetail />} />
          <Route path="activitylist" element={<ActivityList />} />
          <Route path="activitylike" element={<ActivityLike />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
