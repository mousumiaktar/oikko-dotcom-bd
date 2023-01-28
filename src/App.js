import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/pages/details/Details';
import Home from './components/pages/home/Home';
import Footer from './components/share/footer/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/details' element={<Details />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
