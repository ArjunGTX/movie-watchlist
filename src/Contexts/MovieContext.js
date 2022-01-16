import React, { useReducer, useEffect } from "react";
import { MovieReducer } from "../Reducers/MovieReducer";

const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : []
};

export const MovieContext = React.createContext(initialState);

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchList',JSON.stringify(state.watchList));
        localStorage.setItem('watched',JSON.stringify(state.watched));
    },[state]);
  return <MovieContext.Provider value={{state,dispatch}} >
      {children}
      </MovieContext.Provider>;
};
