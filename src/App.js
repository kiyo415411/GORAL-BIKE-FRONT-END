import './App.css';
import Navbar from './layout/Public/NavBar';
// import Index from './layout/Home';
import ProductPage from './components/ProductPage';
import Footer from './layout/Public/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* <Index /> */}
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;
