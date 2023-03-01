import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
