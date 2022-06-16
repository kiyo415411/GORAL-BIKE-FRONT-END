import './App.css';
import Navbar from './layout/Public/NavBar';
// import Index from './layout/Home';
import ProductPage from './components/ProductPage';
import BikeDetailPage from './components/BikeDetailPage';
import Map from './layout/Map';
import Index from './layout/Home/index';
import Footer from './layout/Public/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Navbar />
      <Map />
      <Footer /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/map" element={<Map />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Product/Detail" element={<BikeDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
