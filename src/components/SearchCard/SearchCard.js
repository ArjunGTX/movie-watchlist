import React, {useContext} from "react";
import "./SearchCard.css";
import { MovieContext } from "../../Contexts/MovieContext";
import { addToWatchList, addToWatched } from "../../Actions/Actions";

export const SearchCard = ({movie}) => {

  const {
    state,
    dispatch
  } = useContext(MovieContext);

  const checkMovie = (movie) => {
    return state.watchList.find(listMovie => listMovie.id === movie.id) || state.watched.find(listMovie => listMovie.id === movie.id) ;
  }
  return (
    <div className="search-card">
      <div className={movie.poster_path ? 'cover' : 'cover cover-default'}>{
        movie.poster_path &&
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title ? movie.title : ''} />
      }
      </div>
      <div className="details">
        <h3 className="title">{movie.title ? movie.title : '--'}</h3>
        <small className="release-year">{movie.release_date ? movie.release_date.slice(0,4) : '-'}</small>
      <div className="btn-container">
      <button disabled={checkMovie(movie)} onClick={() => dispatch(addToWatchList(movie))} className="btn">Add To Watchlist</button>
        <button disabled={checkMovie(movie)} onClick={() => dispatch(addToWatched(movie))} className="btn">Add To Watched</button>
      </div>
      </div>
    </div>
  );
};
