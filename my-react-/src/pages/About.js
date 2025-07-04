import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About (){
    const handleSubmit = (e) => {
    alert('Thank you for your feedback!');
  };
    return (
        
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <h1>About Us</h1>
        <p>
            Welcome to Card Heroes! We are dedicated to providing the quickest and best user experience to all our customers.
        </p>
        <h1>Location</h1>
        <p>
            We are locally owned and operated in Ottawa Ontario
        </p>
        <h2>Our Mission</h2>
        <p>
            To allow ease of access to any and all tcg products in Ottawa
        </p>
        <h2>Our Team</h2>
        <p>
            Our team consists of passionate people all knowledgable aboout most card games!
        </p>
        <h2>Contact Us</h2>
        <p>
            Reach out at <a href="Cardheroes@notreal.ca">Cardheroes@notreal.ca</a>.
        </p>
        <div style={{ marginBottom: '1rem' }}>
          <label>Got any feedback? Let us know!</label><br />
          <textarea
            rows="4"
            cols="50"
            placeholder="Let us know if you have any feedback!"
            
          />
        </div>
        <Link to='/' className="btn btn-primary" onClick={handleSubmit}>
            Send Feedback
        </Link>


    </div>
    );
}

export default About;