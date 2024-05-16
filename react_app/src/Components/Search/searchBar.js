import React, {useEffect, useState} from 'react'
import axios from 'axios';
import MoviePoster from './searchPoster';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [movieData, setMovieData] = useState(null);
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }
    useEffect(() => {
        axios.get('http://localhost:8080/search', {
            params: {movie_name: searchInput,
                    nrOfMovies: 1
                    }
        }).then(({data}) => {
            if (data.error) {
                console.log("No results found");
                setMovieData(null);
            }
            else {
                setMovieData(data[0]);
                console.log(data[0]);
            }
        })
    }, [searchInput]);

    return ( 
    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '21%', top: '20%', right: '5%' }}>
        <div>
            <input
                type="search"
                className="form-control rounded my-2 my-lg-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchInput}
                onChange={handleInputChange}
            />
        </div>
        <div style={{ marginTop: '5px' }}>
            {movieData && <MoviePoster title={movieData.title} year={movieData.year} poster={movieData.poster} />}
        </div>
    </div>
    )
};

export default SearchBar;