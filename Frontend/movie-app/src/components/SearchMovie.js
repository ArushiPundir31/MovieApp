import React, { useState } from 'react';
import axios from 'axios';
import './SearchMovie.css';

const SearchMovie = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchOption, setSearchOption] = useState('all');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      let url = 'http://localhost:4528/movies/readAll';

      if (searchOption !== 'all') {
        url = `http://localhost:4528/movies/search?genre=${searchOption}`;
      }

      const response = await axios.get(url);
      setSearchResults(response.data);

    } catch (error) {
      console.error('Error searching movies:', error);
      setError('Error fetching movies. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="search-movie">
      <h2>Search Movies</h2>
      <label>
        Search Option:
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="all">All Movies</option>
          <option value="Drama">Drama</option>
          <option value="Fiction">Fiction</option>
          <option value="Satire">Satire</option>
        </select>
      </label>
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="search-results">
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>{movie.movieName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchMovie;
