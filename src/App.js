import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login'
import HomeBody from './components/HomeBody';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Movies from './components/Movies';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeBody/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/movies' element={<Movies/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
