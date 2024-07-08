import React, { useState } from 'react';
import axios from 'axios';
import './MovieLocations.css';

const MovieLocations = () => {
  const [movieName, setMovieName] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:4528/movies/locations/{movieName}`, {
        params: { movieName }
      });
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching movie locations:', error);
      setError('Failed to fetch locations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="movie-locations">
      <h2>Search Movie Locations</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="location-results">
        <ul>
          {locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieLocations;
