import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
// import LikeList from './components/LikeList';

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      {/* <LikeList /> */}
      <Footer />
    </>
  );
}

export default App;
