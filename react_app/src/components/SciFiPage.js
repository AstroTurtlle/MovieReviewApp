import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from './MovieList';
const SciFiPage=() => {
    const [movies, setMovies] = useState([]);

    // Funcție pentru a prelua filmele de acțiune din API
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/sci-fi-movies', {
                 
                });
                setMovies(response.data); // Setează filmele preluate
            } catch (error) {
                console.error('Eroare la preluarea filmelor:', error);
                alert('A apărut o problemă la preluarea filmelor: ' + error.message);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="category-page-container">
        <div className="h2-heading category-page-title">
            Action Movies
        </div>
        <div className="category-page-content">
            <MovieList movies={movies} bookmark='true' />
        </div>
    </div>
        )

}
export default SciFiPage;