import './App.css';
import Navbar from './layout/Public/NavBar';
import Footer from './layout/Public/Footer';
// ----------------------活動
// import ActivityList from './pages/ActivityList';
// import ActivityLike from './pages/ActivityLike';
// ----------------------課程
// import CourseList from './pages/CourseList';
// import CourseLike from './pages/CourseLike';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <>
      <Navbar />
      {/* ----------------------活動 */}
      {/* <ActivityList /> */}
      {/* <ActivityLike /> */}
      {/* ----------------------課程 */}
      {/* <CourseList /> */}
      {/* <CourseLike /> */}
      <CourseDetail />
      <Footer />
    </>
  );
}

export default App;
