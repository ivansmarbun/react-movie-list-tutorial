import { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites');
        if (storedFavs && storedFavs !== 'undefined') {
            try {
                setFavorites(JSON.parse(storedFavs));
            } catch (e) {
                setFavorites([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(movies => [...movies, movie])
    }
    const removeFromFavorites = (movieId) => {
        setFavorites(movies => movies.filter(movie => movie.id !== movieId))
    }
    const isFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}