import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Navigbar2 from './navigbar2';
import { Row } from 'react-bootstrap';

const Dashboard = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <div>
      <Navigbar2 link="/" page="LOG OUT" />
      <Container>
          <div className='my-2'>
            <p className='font-32 text-pink fst-italic font-500'>All Flights</p>
          </div>
          <Row>
            {
              flights.map(flight => (
                <div className="col-12 col-md-3">
                  <div className="shadow-sm p-3 bg-blue">
                    
                  </div>
                </div>
              ))
            }
          </Row>
      </Container>
    </div>
  )
}

export default Dashboard