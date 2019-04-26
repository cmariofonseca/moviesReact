import React from 'react';
import Navigation from '../elements/navigation/Navigation';
import MovieInfo from '../elements/movieInfo/MovieInfo';
import MovieInfoBar from '../elements/movieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/fourColGrid/FourColGrid.js';
import Actor from '../elements/actor/Actor';
import Spinner from '../elements/spinner/Spinner';
import './Movie.css';

const Movie = ({ movie, directors, actors, loading }) => (
  <div className="rmdb-movie">
    {movie ?
      <div>
        <Navigation movie={movie.original_title} />
        <MovieInfo movie={movie} directors={directors} />
        <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      </div>
      : null}
    {actors ?
      <div className="rmdb-movie-grid">
        <FourColGrid header={'Actors'}>
          {actors.map((element, i) => (
            <Actor key={i} actor={element} />
          ))}
        </FourColGrid>
      </div>
      : null}
    {!actors && !loading ? <h1>No movie found</h1> : null}
    {loading ? <Spinner /> : null}
  </div>
)

export default Movie;