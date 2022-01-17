//action creators for MovieReducer

const addToWatchList = (movie) => ({
  type: "ADD_TO_WATCHLIST",
  payload: movie,
});

const addToWatched = (movie) => ({
  type: "ADD_TO_WATCHED",
  payload: movie,
});

const removeFromWatchList = (movieId) => ({
  type: "REMOVE_FROM_WATCHLIST",
  payload: movieId,
});

const removeFromWatched = (movieId) => ({
  type: "REMOVE_FROM_WATCHED",
  payload: movieId,
});
export { addToWatchList, addToWatched, removeFromWatchList, removeFromWatched };
