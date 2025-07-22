import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    //useState() returns a state variable and a function used to set the state variable
    //When a state change occurs, the ENTIRE component is reran or re-rendered
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    //Common to have two state variables when loading data, one for loading data and one for catching errors
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //You call the arrow function whenever the contents of the array changes
    //If the dependency array is empty, it will just run once
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies");
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        //Prevents default behavior, in this case prevents search from clearing text once page reloads
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
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

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                    <div className="loading">Loading. . .</div>
                ) : (
                    <div className="movies-grid">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Home