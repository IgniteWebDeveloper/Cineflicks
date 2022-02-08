import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Card, CardActions, Grid, Button, Typography} from '@mui/material/';
import Cards from './Components/Cards';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Trailer from './Components/Trailer';
import {trending, Page, totalPages} from './Context/Context';







const App = () => {

  const [trending, settrending] = useState(null);
  const [totalPage, settotalPage] = useState('');
  const [page, setpage] = useState(1);

  const [trailer, settrailer] = useState(null);

  useEffect(() => {

    if (!trending) {
      setTimeout(() => {
        fetchTrending()
      }, 1600)
    }
    
  }, [trending]);
  
  const fetchTrendings = (event) => {
    fetchTrending()
    let currPage = (page)
    currPage = +(event.target.innerText)
    setpage(currPage)
   }

  const fetchTrending = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=9bf9a37935497cb8a2ccc58d4602c789&page=${page}`)
      .then(d => d.json())
      .then(res => {
        settrending(res.results)
        settotalPage(res.total_pages)
      })
  }
  const navigate = useNavigate();


  const fetchTrailer = (movie) =>{
    fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=9bf9a37935497cb8a2ccc58d4602c789&append_to_response=videos`)
      .then(d => d.json())
      .then(res => {
        settrailer(res)
      })
      navigate('/movie-trailer')
    }

  return <Typography>
    <div className='Main'>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Cards trending={trending} fetchTrending={fetchTrendings} totalPage={totalPage} page={page} fetchTrailer={fetchTrailer}/>} />
        <Route exact path={'/movie-trailer'} element={<Trailer trailerData={trailer} trendingData={trending} />} />
      </Routes>
    </div>;
  </Typography>
};

export default App;
