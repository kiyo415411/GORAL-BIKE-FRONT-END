import './App.css';
import Navbar from './layout/Public/NavBar';
import Index from './layout/Home';
import Footer from './layout/Public/Footer';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <>
      <Navbar />
      <ShoppingCart />
      <Footer />
    </>
  );
}

export default App;
