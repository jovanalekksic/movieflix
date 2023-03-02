import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomeBody from './components/HomeBody';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <HomeBody/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
