import React, {useEffect, useState} from 'react'


import MovieCard from '../MovieCard/MovieCard';
import './Homepage.css';

const moviesData = [
    { title: "Movie 1", rating: "Rating 1",  poster: 'url1' },
    { title: "Movie 2", rating: "Rating 2",  poster: "url2" },
    { title: "Movie 3", rating: "Rating 3",  poster: "url3" },
    { title: "Movie 4", rating: "Rating 4",  poster: "url4" },
    { title: "Movie 5", rating: "Rating 5",  poster: "url5" },
    { title: "Movie 6", rating: "Rating 6",  poster: "url6" },
    { title: "Movie 7", rating: "Rating 7",  poster: "url7" },
    { title: "Movie 8", rating: "Rating 8",  poster: 'url8' },
    { title: "Movie 9", rating: "Rating 9",  poster: "url9" },
    { title: "Movie 10", rating: "Rating 10",  poster: "url10" },
    { title: "Movie 11", rating: "Rating 11",  poster: "url11" },
    { title: "Movie 12", rating: "Rating 12",  poster: "url12" },
    { title: "Movie 13", rating: "Rating 13",  poster: "url13" },
    { title: "Movie 14", rating: "Rating 14",  poster: "url14" },
    { title: "Movie 15", rating: "Rating 15",  poster: "url15" }
    // Add more movie data here
];

const Homepage = () => {
    const [query, setQuery] = useState('');

    
    const filteredMovies = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='container'>
            <div className="movies-list">
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.title} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;