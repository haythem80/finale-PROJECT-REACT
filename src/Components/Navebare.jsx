import React from 'react'
import { Button, Container, Form, Nav,  Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsAirplaneFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Navebare = () => {
  return (
    
    <div className='navebare'>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
    <BsAirplaneFill  className='airplane'/>
      <Navbar.Brand href="#" className='travelo'>TRAVELO</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        <Link to={"/"}><Nav.Link href="#action1" className='home'>Home</Nav.Link></Link>
        <Nav.Link href="#action2" className='About'>About</Nav.Link>
          <Link to={"/destination"}><Nav.Link href="#action2" className='Destination'>Destination</Nav.Link> </Link>
        </Nav>
        <Form className="d-flex">
          <Link to={"/login"}>
          <Button variant="outline-success" className='btn1'>Login</Button>
          </Link>
          <TiShoppingCart className='shop'/>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </div>
  )
}

export default Navebare