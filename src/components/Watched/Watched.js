import React, { useContext } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieContext } from "../../Contexts/MovieContext";

const Watched = () => {
  const { state } = useContext(MovieContext);
  return (
    <div className="card-container">
      {state.watched.length > 0 ? (
        state.watched.map((movie) => (
          <MovieCard movie={movie} key={movie.id} type="watched" />
        ))
      ) : (
        <h2>Nothing here...</h2>
      )}
    </div>
  );
};
export default Watched;
