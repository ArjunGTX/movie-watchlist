import React, {useState,useEffect} from "react";
import "./Search.css";
import { SearchCard } from "../SearchCard/SearchCard";

let API_KEY = 'a06430d8522adb1e2a6e3b2ed2779fd8';

export const Search = () => {
    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState('');

    useEffect(() => {
        if(query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en_US&query=${query}`)
            .then(response => response.json())
            .then(data => {
                if (!data.errors) setMovies(data.results)
                else setMovies([]);
            })
            .catch(err => console.log(err));
        }
    },[query])

  return (
    <main className="add-container">
            <input onChange={(e) => setQuery(e.target.value)} type="text" className="search" placeholder="Search Movies..." autoFocus value={query}/>
      <div className="search-container">
        {
            movies && movies.map(movie => <SearchCard movie={movie} key={movie.id} />)
        }
      </div>
    </main>
  );
};
