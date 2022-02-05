import React, { Fragment } from 'react';
import Loader from '../preview.gif'

const Cards = ({ trending }) => {
  return <Fragment>
    <div className="mainContent">
      {!trending ?
        <div className="loadingMain">
          <img className='loading' src={Loader} alt="" />
        </div> :
        <Fragment>
          <h2>Trending Movies</h2>
          <div className="trendingContainer">
            {trending.map(movie => <a href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=9bf9a37935497cb8a2ccc58d4602c789&append_to_response=videos`}>
              <div className="CARD">
                <div className="top">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                </div>
                <div className="bottom">
                  <h3>{movie.title || movie.name}</h3>
                  <a href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=9bf9a37935497cb8a2ccc58d4602c789&append_to_response=videos`}>Watch Trailer</a>
                </div>
              </div>
            </a>
            )}
          </div>
        </Fragment>
      }
    </div>
  </Fragment>;
};

export default Cards;
