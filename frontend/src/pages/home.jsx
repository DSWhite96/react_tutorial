import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    //useState() returns a state variable and a function used to set the state variable
    //When a state change occurs, the ENTIRE component is reran or re-rendered
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2014"},
        {id: 2, title: "The Terminator", release_date: "1984"},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ]

    const handleSearch = (e) => {
        //Prevents default behavior, in this case prevents search from clearing text once page reloads
        e.preventDefault();
        alert(searchQuery);
    };

    //Need to include the key property in order to differentiate between the different movies
    //Once a state is updated, the component will change and rerender itself to show the new state
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies ..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home