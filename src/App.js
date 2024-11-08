import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Typography} from '@mui/material/';
import Cards from './Components/Cards';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Trailer from './Components/Trailer';
import Search from './Components/Search';









const App = () => {

  const [trending, settrending] = useState(null);
  const [totalPage, settotalPage] = useState('');
  const [page, setpage] = useState(1);
  const [searchResults, setsearchResults] = useState(null);
  
  const [movieGenre, setmovieGenre] = useState([])

  const [trailer, settrailer] = useState(null);


  
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

  useEffect(() => {

    if (!trending) {
      setTimeout(() => {
        fetchTrending()
      }, 1600)
    }
    
  }, [trending]);

  const fetchSearch = (event) => {
    event.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9bf9a37935497cb8a2ccc58d4602c789&query=${event.target.query.value}`)
      .then(d => d.json())
      .then(res => {
        setsearchResults(res)
        navigate('/search')
      })
    }

  const fetchTrailer = (movie) =>{
    fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=9bf9a37935497cb8a2ccc58d4602c789&append_to_response=videos`)
      .then(d => d.json())
      .then(res => {
        settrailer(res)
        let g = res.genres.map(e => ({...e, image: e.name }));
        setmovieGenre(g)
      })
      navigate('/movie-trailer')
    }



  return <Typography>
    <div className='Main'>
      <Navbar fetchSearch={fetchSearch} />
      <Routes>
        <Route exact path={'/'} element={<Cards trending={trending} fetchTrending={fetchTrendings} totalPage={totalPage} page={page} fetchTrailer={fetchTrailer}/>} />
        <Route exact path={'/movie-trailer'} element={<Trailer trailerData={trailer} genress={movieGenre} />} />
        <Route exact path={'/search'} element={<Search searchResult={searchResults}  fetchTrailer={fetchTrailer}/>} />
      </Routes>
    </div>;
  </Typography>
};

export default App;
