import React, { useState } from 'react';
import axios from 'axios';
import './AddMovieForm.css';

const AddMovieForm = () => {
  const [movieName, setMovieName] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4528/movies/add', {
        movieName,
        rating,
        genre,
      });
      if (response.status === 200) {
        setShowSuccessMessage(true);
        setErrorMessage('');
        resetForm();
        setTimeout(() => setShowSuccessMessage(false), 3000);
      }
    } catch (error) {
      setErrorMessage('Failed to add movie. Please try again.');
    }
  };

  const resetForm = () => {
    setMovieName('');
    setRating('');
    setGenre('');
  };

  return (
    <div className="add-movie-form">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Select Genre</option>
          <option value="Drama">Drama</option>
          <option value="Fiction">Fiction</option>
          <option value="Satire">Satire</option>
        </select>
        <button type="submit">Add Movie</button>
      </form>
      {showSuccessMessage && <p className="success">Movie added successfully!</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default AddMovieForm;
