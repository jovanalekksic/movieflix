import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login'
import HomeBody from './components/HomeBody';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Movies from './components/Movies';
import Favorites from './components/Favorites';
import Table from './components/admin/Table';
import { useEffect, useState } from 'react';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';
import TVShows from './components/TVShows';
import Pricing from './components/Pricing';
import Converter from './components/Converter';
import About from './components/About';
import UserPrivateRoute from './components/PrivateRoutes/UserPrivateRoute';
import AdminPrivateRoute from './components/PrivateRoutes/AdminPrivateRoute';
import UpdateTable from './components/admin/UpdateTable';


function App() {

  const [token,setToken]=useState();

  function addToken(auth_token){
    setToken(auth_token);
  }

  const [movies, setMovies] = useState();
 


  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      {/* <NavBar element={<NavBar token={token} />}/> */}

      <Routes>

          

        <Route path='/' element={<NavBar token={token} role={role}/>} >
          {/* svi mogu da vide i pristupe */}
          <Route path='/register' element={<Register addToken={addToken} setRole={setRole}/>}  />
          <Route path='/login' element={<Login addToken={addToken} setRole={setRole} />}  />
          <Route  path='/home' element={<HomeBody/>}  />

          <Route path='/about' element={<About/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/converter' element={<Converter/>} />

          {/* samo ulogovani korisnici */}
          {/* <Route element={<UserPrivateRoute/>}>
          </Route> */}
            <Route path='/movies' element={<Movies movies={movies} setMovies={setMovies} />} />
            <Route path='/detail/:id' element={<MovieDetails movies={movies} />} />
            <Route path='/tvshows' element={<TVShows/>} />
            <Route path='/favorites' element={<Favorites token={token}/>} />
          
          {/* samo admin */}
          {/* <Route element={<AdminPrivateRoute/>} > 
          </Route> */}

            <Route path='/table' element={<Table  />} />
            <Route path='/update:id' element={<UpdateTable/>} />

        </Route>

      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
