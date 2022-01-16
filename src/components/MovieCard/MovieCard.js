import React, {useContext} from 'react';
import './MovieCard.css';
import { addToWatched, addToWatchList, removeFromWatched, removeFromWatchList } from '../../Actions/Actions';
import { MovieContext } from '../../Contexts/MovieContext';

export const MovieCard = ({type,movie}) => {

    const {dispatch} = useContext(MovieContext);

    return (
        <div className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title ? movie.title : ''} className="poster" />
            <div className="overlay">
            <div className="controls">
                {
                    type === 'watchList' && 
                    <>
                    <i className="fas fa-eye" onClick={() => {
                        dispatch(addToWatched(movie));
                        dispatch(removeFromWatchList(movie.id));
                    }
                    }></i> 
                    <i className="far fa-trash-alt" onClick={() => dispatch(removeFromWatchList(movie.id))}></i>
                    </>
                }
                {
                    type === 'watched' && 
                    <>
                    <i className="fas fa-eye-slash " onClick={() => {
                        dispatch(removeFromWatched(movie.id));
                        dispatch(addToWatchList(movie));
                    }}></i>
                    <i className="far fa-trash-alt" onClick={() => dispatch(removeFromWatched(movie.id))}></i>
                    </>
                }
            </div>   
            </div>
        </div>
    )
}


