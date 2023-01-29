import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/pages/cart/Cart';
import CheakOut from './components/pages/cheakOut/CheakOut';
import Details from './components/pages/details/Details';
import Home from './components/pages/home/Home';
import ProductCategory from './components/pages/productCategory/ProductCategory';
import Footer from './components/share/footer/Footer';
import Navbar from './components/share/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/category' element={<ProductCategory />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cheakout' element={<CheakOut />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
