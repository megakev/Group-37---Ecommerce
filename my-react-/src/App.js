import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Ecommerce from "./pages/Ecommerce";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Sale from "./pages/sale";


function App() {
  return (
    <Router>
      <Navbar style={{backgroundColor: 'rgb(2, 149, 255)'}} expand="lg" >
        <Container>
          <Navbar.Brand href="/">Card Heroes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to="/">Home</Nav.Link>
              <Nav.Link as = {Link} to="/ecommerce">Shop</Nav.Link>
              <Nav.Link as = {Link} to="/sale">Deals!</Nav.Link>
              <Nav.Link as = {Link} to="/about">About Us</Nav.Link>
   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/sale" element={<Sale/>} />

        </Routes>
      </Container>
    </Router>
    
  );
  
}

export default App;
