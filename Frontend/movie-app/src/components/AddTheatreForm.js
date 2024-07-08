import React, { useState } from 'react';
import axios from 'axios';
import './AddTheatreForm.css';

const AddTheatreForm = () => {
  const [theatreName, setTheatreName] = useState('');
  const [location, setLocation] = useState('');
  const [ticketCost, setTicketCost] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const theatreData = {
      theatreName,
      location,
      ticketCost: parseFloat(ticketCost)
    };

    try {
      const response = await axios.post('http://localhost:4528/theatres/add', theatreData);
      if (response.status === 201) {
        setSuccessMessage('Theatre added successfully!');
        setTheatreName('');
        setLocation('');
        setTicketCost('');
      }
    } catch (error) {
      setErrorMessage('Failed to add theatre. Please try again.');
      console.error('Error adding theatre:', error);
    }
  };

  return (
    <div className="add-theatre-form">
      <h2>Add Theatre</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="theatreName">Theatre Name</label>
          <input
            type="text"
            id="theatreName"
            value={theatreName}
            onChange={(e) => setTheatreName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticketCost">Ticket Cost</label>
          <input
            type="number"
            step="0.01"
            id="ticketCost"
            value={ticketCost}
            onChange={(e) => setTicketCost(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Theatre</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default AddTheatreForm;
