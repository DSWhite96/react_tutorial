import { createContext, useContext, useEffect, useState } from "react";

//Allows a state to be globally available to anything that's within the provided context
//Think of it as state manager for our favorite movies
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

//Providers provide state to any of the components that are wrapped around it
//children = anything that's inside the component that you rendered
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        //localStorage is data stored in the browser
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        //Syntax for adding data to a state array
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        //Sets favorites to equal the previous list, minus any movies that match the id we are removing
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        //some() returns true if at least one element in the array meets the provided condition
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
}