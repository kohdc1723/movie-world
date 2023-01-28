import React from "react";
import "./index.css";

const MovieCard = (props) => {
    return (
        <div className="group relative rounded-xl w-72 h-96 my-3 hover:scale-105">
            <img className="w-full h-full rounded-xl" src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://via.placeholder.com/400"} alt={props.movie.Title} />
            <div className="invisible absolute font-bebas-neue text-xl text-white bottom-0 rounded-b-xl w-full text-left pl-5 bg-stone-700 opacity-80 group-hover:visible">
                <p>{props.movie.Type}</p>
                <p>{props.movie.Title} ({props.movie.Year})</p>
            </div>
        </div>
    );
}

export default MovieCard;