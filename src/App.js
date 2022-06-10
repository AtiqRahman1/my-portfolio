import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Home/Blogs';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
