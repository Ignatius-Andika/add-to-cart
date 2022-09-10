import React, { Fragment } from "react";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home'
import Cart from "./pages/Cart";

  
function App() {
  
    return (
        <>
            <BrowserRouter>
            <Navbar bg="light" expand="lg" className='navbar'>
              <Container fluid>
                <Navbar.Brand href="#"><h2>CariBarang.ID</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    navbarScroll
                  >
                    <NavLink to="/" style={{color:'black', textDecoration:'none'}}>
                            <h4>Product</h4>
                    </NavLink>
                  </Nav>
                    <Button variant="outline-success" className="d-flex">
                    <NavLink to="/cart" style={{color:'black', textDecoration:'none'}}>
                            <h4 className="m-0">Cart</h4>
                        </NavLink>
                        </Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
                <CartProvider>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/cart" element={<Cart />} />
                  </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
}
  
export default App;