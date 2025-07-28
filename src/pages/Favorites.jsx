import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';


function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites && favorites.length > 0) {
        return (
            <div className='favorites-header'>
                <h2>Your Favorite Movies</h2>
                <div className="movie-grid">
                    {favorites.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>
        )
    } else
        return (
            <div className="favorites-empty"> {
                <h2>No favorite movies found.</h2>
            }</div>
        )
}

export default Favorites;
