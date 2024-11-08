import React, { Fragment } from 'react';
import { Grid } from '@mui/material/';
import Loader from '../preview.gif';



const Search = ({ searchResult, fetchTrailer }) => {
  console.log(searchResult.results.length)
  return <Fragment>
    {!searchResult ?
      <div className="loadingMain">
        <img className='loading' src={Loader} alt="" />
      </div> :
      <div className="trendingContainer">
        {searchResult.errors || searchResult.results.length === 0 ? 
          <h2>OOPS there is no result related to your Search</h2>:
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 4, md: 25 }}>
          {searchResult.results.map(movie =>
            <Grid item xs={2} sm={4} md={4} key={movie.id}  >
              <div onClick={() => fetchTrailer(movie.id)} className="CARD">
                <div className="top">
                  {!movie.poster_path ?
                    <h3>No Poster available</h3> :
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />}
                </div>
                <div className="bottom">
                  <h3>{movie.title || movie.name}</h3>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            </Grid>)}
        </Grid>
        }
        
      </div>
    }
  </Fragment>
};

export default Search;
