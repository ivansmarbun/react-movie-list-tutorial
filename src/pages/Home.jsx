import MovieCard from "../components/MovieCard"
import { useState, useEffect, use } from "react"
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css';


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const populareMovies = await getPopularMovies();
                setMovies(populareMovies);
            } catch (error) {
                console.log("Error fetching popular movies:", error);
                setError("Failed to fetch popular movies.");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }
        catch (error) {
            console.log("Error searching movies:", error);
            setError("Failed to search for movies.");
        }
        finally {
            setLoading(false);

        }
    };

    return (
        <div className="home-page">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {loading ? <div className="loading">Loading movies...</div> : (
                <div className="movie-grid">
                    {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}
                </div>
            )}
        </div>
    )
}

export default Home
