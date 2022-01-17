import React, {useState,useEffect} from "react";
import "./Search.css";
import { SearchCard } from "../SearchCard/SearchCard";
import axios from'axios';
import { useDebounce } from "../../Hooks/useDebounce";

const API_KEY = 'a06430d8522adb1e2a6e3b2ed2779fd8';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const Search = () => {

    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState('');

    const fetchMovies = async (url,params) => {
      try {
        const response = await axios.get(url,{params});
        setMovies(response.data.results);
      } catch(err) {
        console.log(err);
      }
    }

    const debouncedFetch = useDebounce(fetchMovies,300);

    const params = {
      api_key: API_KEY,
      include_adult: 'false',
      language: 'en_US',
      query: query
    }

    useEffect(() => {
        if(query) {
            debouncedFetch(BASE_URL,params);
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
