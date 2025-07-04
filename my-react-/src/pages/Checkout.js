import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Checkout() {
 const handleSubmit = (e) => {
    alert('Thank you for your purchase! Your order has been successfully placed. We will send you a confirmation email shortly.');
  };
  return (
      <><div className="col-md-8">
          <Alert variant="warning">
              First time customer? Use code CARDSARECOOL to save and extra 10% on us!
          </Alert></div>
          
          
          <div>
              <h2>Checkout Page</h2>
              <p>Please enter your information to complete this purchase. </p>

              <Form>
                  <Form.Group className="mb-3" controlId="formCC">
                      <Form.Label>Credit Card number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Credit card number" />
                      <Form.Text className="text-muted">
                          (don't actually enter your Card info)
                      </Form.Text>

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCCexpiration">
                      <Form.Label>Expiration date</Form.Label>
                      <Form.Control type="text" placeholder="ex: 01/2026" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="CCV">
                      <Form.Label>CCV</Form.Label>
                      <Form.Control type="text" placeholder="CCV" />
                      <Form.Text className="text-muted">
                          (Seriously don't do it)
                      </Form.Text>

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formFullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter address" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter phone number" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="code">
                      <Form.Label>Promo Code</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your promo Code (if applicable)" />
                  </Form.Group>
                  <Link to='/confirmation' className="btn btn-primary" onClick={handleSubmit}>
                      Place Order
                  </Link>
              </Form>



          </div></>

  );
}

export default Checkout;