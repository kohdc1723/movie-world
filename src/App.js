import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//import "./App.css";
import "./index.css";
import searchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("top");
    }, []);

    return (
        <div className="bg-slate-900">
            <h1 className="mt-20 text-5xl text-center text-amber-500">Movie Land</h1>

            <div className="mt-20">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img  src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;