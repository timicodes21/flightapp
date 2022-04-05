import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigbar = () => {
    
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#"><p className='font-32 text-pink fst-italic font-500'>Fly Better</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 pt-md-2 pb-md-1 my-lg-0">
                    <Nav.Link><p className="font-13 text-agreen roboto p-md-2 font-500 text-agreen"><Link to="/login" className="text-agreen">LOGIN</Link></p></Nav.Link>
                    <Nav.Link><button className="font-13 rounded px-md-2 text-white signup-button p-2 bg-pink font-500"><Link to="/sign-up" className="text-white">SIGN UP</Link></button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
  )
}

export default Navigbar