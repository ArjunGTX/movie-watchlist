import React, {useContext} from 'react';
import './WatchList.css';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieContext } from '../../Contexts/MovieContext';

export const WatchList = () => {
    const {
        state,
        dispatch
    } = useContext(MovieContext);
    return (
            <div className="card-container">
                {
                    state.watchList && state.watchList.map(movie => <MovieCard movie={movie} key={movie.id} type='watchList'/>)
                }
            </div>
    )
}
