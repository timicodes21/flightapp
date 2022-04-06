import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="p-5">
        <div className='my-2'>
            <p className='font-24 text-pink fst-italic font-500'>Oops, Page not found</p>
            <p className="font-18 text-agreen roboto p-md-2 font-500 text-agreen"><Link to="/" className="text-agreen">Goto Homepage</Link></p>
        </div>
    </Container>
  )
}

export default NotFound