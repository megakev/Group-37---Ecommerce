import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import {  Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function StarRating() {
  const [selectedRating, setSelectedRating] = useState(0); 

  return (
    <div style={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
      {[...Array(5)].map((_, index) => { 
        const starValue = index + 1;
        return (
          <FaStar
            key={starValue}
            size={24}
            onClick={() => setSelectedRating(starValue)} 
            color={starValue <= selectedRating ? '#f5c518' : '#e4e5e9'} 
          />
        );
      })}
    </div>
  );
}


function Confirmation() {

  const handleSubmit = (e) => {
    alert('Thank you for your feedback!');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
 
      <h2>Would you like to help us out by filling in a short survey ?:</h2>
      <div>

      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>How was your overall experience?</label>
          <StarRating />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>How easy was it to complete your purchase?</label>
          <StarRating />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>How satisfied are you with the selection of products?</label>
          <StarRating />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>How satisfied are you with the price of the products?</label>
          <StarRating />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>How likely are you to recommned our shop to others?</label>
          <StarRating />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Additional Comments:</label><br />
          <textarea
            rows="4"
            cols="50"
            placeholder="Let us know if you have any feedback!"
            
          />
        </div>

        <Link to="/" className="btn btn-primary" onClick={handleSubmit}>
          Submit Feedback
        </Link>
      </form>
    </div>
  );
}

export default Confirmation;
