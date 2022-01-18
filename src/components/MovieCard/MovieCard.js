import React, { useState, useContext } from "react";
import "./MovieCard.css";
import {
  addToWatched,
  addToWatchList,
  removeFromWatched,
  removeFromWatchList,
} from "../../Actions/MovieActions";
import { MovieContext } from "../../Contexts/MovieContext";
import { IMG_URL } from "../../Constants/Constants";

export const MovieCard = ({ type, movie }) => {
  const { dispatch } = useContext(MovieContext);
  //state to store hover state of MovieCard
  const [overlay, setOverlay] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseLeave={() => setOverlay(false)}
      onMouseOver={() => setOverlay(true)}
    >
      {movie.poster_path ? (
        <img
          src={IMG_URL + movie.poster_path}
          alt={movie.title}
          className="poster"
        />
      ) : (
        <h4 className="alt-text">{movie.title}</h4>
      )}
      <div className={overlay ? "overlay show-overlay" : "overlay"}>
        <div className="controls">
          {type === "watchList" && (
            <>
              <i
                className="fas fa-eye"
                onClick={() => {
                  dispatch(addToWatched(movie));
                  dispatch(removeFromWatchList(movie.id));
                }}
              ></i>
              <i
                className="far fa-trash-alt"
                onClick={() => dispatch(removeFromWatchList(movie.id))}
              ></i>
            </>
          )}
          {type === "watched" && (
            <>
              <i
                className="fas fa-eye-slash "
                onClick={() => {
                  dispatch(removeFromWatched(movie.id));
                  dispatch(addToWatchList(movie));
                }}
              ></i>
              <i
                className="far fa-trash-alt"
                onClick={() => dispatch(removeFromWatched(movie.id))}
              ></i>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
