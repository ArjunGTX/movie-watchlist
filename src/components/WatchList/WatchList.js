import React, { useContext } from "react";
import "./WatchList.css";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieContext } from "../../Contexts/MovieContext";

const WatchList = () => {
  const { state } = useContext(MovieContext);
  return (
    <div className="card-container">
      {state.watchList.length > 0 ? (
        state.watchList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} type="watchList" />
        ))
      ) : (
        <h2>Nothing here...</h2>
      )}
    </div>
  );
};
export default WatchList;
