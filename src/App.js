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
import Table from './components/Table';
import { useEffect, useState } from 'react';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';
import TVShows from './components/TVShows';
import Pricing from './components/Pricing';
import Converter from './components/Converter';
import About from './components/About';


function App() {

  const [token,setToken]=useState();

  function addToken(auth_token){
    setToken(auth_token);
  }

  const [movies, setMovies] = useState();
  useEffect(() => {
    if (movies == null) {
      axios.get("api/movies").then((res) => {
        console.log(res.data);
        setMovies(res.data.movies);
      });
    }
  }, [movies]);

  const [admin, setAdmin]=useState();
  //admin: jovana / jo@gmail.com
  useEffect(()=>{
    if(admin==null){
      axios.get("api/users")
      .then((res)=>{
        console.log(res.data[6]);
        setAdmin(res.data[6].id) //7
        
      })
    }
  })


const [isAuthorized, setIsAuthorized]=useState(false);



  return (
    <BrowserRouter>
      {/* <NavBar element={<NavBar token={token} />}/> */}

      <Routes>

        <Route path='/' element={<NavBar token={token} />} >
          <Route path='home' element={<HomeBody/>}  />
          <Route path='/register' element={<Register/>}  />
          <Route path='/login' element={<Login addToken={addToken} />}  />
          <Route path='/movies' element={<Movies movies={movies}/>} />
          <Route path='/detail/:id' element={<MovieDetails movies={movies} />} />
          <Route path='/tvshows' element={<TVShows/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/table' element={<Table token={token}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/converter' element={<Converter/>} />

        </Route>

      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
