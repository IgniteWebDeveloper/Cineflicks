import React, { Fragment} from 'react';
import Loader from '../preview.gif';



const Trailer = ({ trailerData, genress }) => {


  return <div className='trailerMain'>
    {!trailerData ?
      <div className="loadingMain">
        <img className='loading' src={Loader} alt="" />
      </div> :
      <Fragment>
        <div className="imageMain">
          {trailerData.poster_path ?
            <img className='backDrop' src={`https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${trailerData.poster_path}`} alt="" />
            : ''}
          <div className="imageBlur"></div>
          <div className={(!trailerData.videos.results[0] ? "noContent" : "content")}>
            {!trailerData.videos.results[0] ?
              <h2>OOPS there is no Trailer Available</h2>
              : <iframe className='trailerVideo' width="853" height="480" src={`https://www.youtube.com/embed/${trailerData.videos.results[0].key}`} title="YouTube video player" frameborder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; allowfullscreen;" ></iframe>}
            <div className="Data">
              <h1>{trailerData.title}</h1>
              <h4>{trailerData.overview}</h4>
              <h5>GENRES</h5>
              {genress.map(m =>
              <span className='genreIcon' key={m.id}>
                <img src={require(`../genreIcons/${m.image}.png`)} alt="" />
                <ul>{m.name}</ul>
              </span>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    }
  </div>;

}

export default Trailer;
