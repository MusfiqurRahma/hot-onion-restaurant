import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo2.png';
import './TopeHeader.css';

const TopHeader = () => {
    return (
        <Navbar sticky="top"  >
  <Container>
    <Navbar.Brand href="#home"><img style={{width:'150px'}} src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <i style={{marginRight:'10px'}} class="fas fa-shopping-cart"></i>
      <Link to='/login' className='login'>Login</Link>
      <Link to='/signup'><button className='signIn-btn'>Sign Up</button></Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};
export default TopHeader;