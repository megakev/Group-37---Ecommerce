import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Form, Row, Col, Container, ListGroup,Alert,aside } from 'react-bootstrap';


function sale(){

return (
    
        <><><div className="col-md-8">
        <Alert variant="warning">
            Save up to 25% on all Magic products durring our Canada Day sale, from July 1st to July 10th! while supplies last
        </Alert></div><>

            <div className="col-md-8">
                <Alert variant="warning">
                    Save up to 10% on all Boxed products durring the whole month of July!
                </Alert></div>

            <div className="col-md-8">
                <Alert variant="warning">
                    Use Code CARDHERO at checkout for an extra 15% off any purchase over 80$
                </Alert></div>



            <div style={{ maxWidth: '700px', margin: '40px auto', padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                <h1>Deals!</h1>
                <p>
                    Come Back here to check out our amazing deals, updated weekly!
                </p></div></></><Link to="/ecommerce">
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'rgb(2, 149, 255)', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
                Start Shopping
            </button>


        </Link></>






 );

}
export default sale;