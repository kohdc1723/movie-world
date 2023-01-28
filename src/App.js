import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { AiOutlineSearch } from "react-icons/ai";
import "./index.css";

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
        <div className="bg-stone-900">
            <h1 className="pt-20 text-9xl text-center text-amber-500 font-bebas-neue">Movie World</h1>

            <div className="flex justify-between relative items-center mt-20 h-12 w-1/2 mx-auto bg-stone-800 rounded-full">
                <input className="bg-stone-800 text-amber-500 h-12 w-full text-lg rounded-full pl-5 placeholder-amber-500" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <AiOutlineSearch className="absolute text-amber-500 text-2xl right-5 hover:cursor-pointer" onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 ? (
                <div className="flex flex-wrap gap-10 mt-20 justify-center">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="mt-20">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;