import './App.css';
import Navbar from './layout/Public/NavBar';
// import Index from './layout/Home';
import Map from './layout/Map';
import MapDetail from './layout/MapDetail';
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
        <Route path="/Map" element={<Map />} />
        <Route path="/Map/MapDetail/:mapName" element={<MapDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
