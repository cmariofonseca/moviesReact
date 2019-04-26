import React from 'react';
import HeroImage from '../elements/heroImage/HeroImage';
import SearchBar from '../elements/searchBar/SearchBar';
import FourColGrid from '../elements/fourColGrid/FourColGrid';
import MovieThumb from '../elements/movieThumb/MovieThumb';
import LoadMoreBtn from '../elements/loadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/spinner/Spinner';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import './Home.css';

const Home = ({ movies, heroImage, loading, currentPage, totalPages, searchTerm, searchMovies, loadMoreMovies }) => (

  <div className="rmdb-home">
    {heroImage ?
      <div>
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
        <SearchBar callback={searchMovies} />
      </div> : null}
    <div className="rmdb-home-grid">
      <FourColGrid
        header={searchTerm ? 'Search Result' : 'Popular Movies'}
        loading={loading}
      >
        {movies.map((element, i) => (
          <MovieThumb
            key={i}
            clickable={true}
            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
            movieId={element.id}
            movieName={element.original_title}
          />
        ))}
      </FourColGrid>
      {loading ? <Spinner /> : null}
      {(currentPage <= totalPages && !loading) ?
        <LoadMoreBtn text="Load More" onClick={loadMoreMovies} />
        : null
      }
    </div>
  </div>
)

export default Home;