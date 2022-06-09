import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
// import CourseLike from './pages/LikeList';
import ActivityLike from './pages/ActivityLike';

function App() {
  return (
    <>
      <Navbar />
      {/* <CourseLike /> */}
      <ActivityLike />
      <Footer />
    </>
  );
}

export default App;
