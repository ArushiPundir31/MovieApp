import React, { useState } from 'react';
import axios from 'axios';
import './CheckMovie.css';

const CheckMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = 'http://localhost:4528/movies/readAll';
      const response = await axios.get(url);

      if (Array.isArray(response.data)) {
        const movies = response.data;
        const exists = movies.some(movie => movie.movieName.toLowerCase() === movieName.toLowerCase());

        if (exists) {
          alert(`The movie "${movieName}" is present.`);
        } else {
          alert(`The movie "${movieName}" is not present.`);
        }
      } else {
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error('Error checking movie:', error);
      setError('Failed to check movie. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="check-movie">
      <h2>Check Movie</h2>
      <label>
        Movie Name:
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name"
        />
      </label>
      <button onClick={handleCheck} disabled={loading || !movieName.trim()}>
        {loading ? 'Checking...' : 'Check Movie'}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CheckMovie;
