export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
