import React, { useState, useEffect } from 'react'
import { Container, Image, Row } from 'react-bootstrap';
import Navigbar2 from './navigbar2';
import Spinner from '../assets/spinner.gif'
import ErrorImg from '../assets/errorImg.png'
import moment from 'moment'
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(moment(1517184000).format('MMMM Do YYYY, h:mm:ss a'))
  console.log(Date.now())
  // Ajax call
  useEffect(() => {
    const endPoint = 'https://developertimi:Babalola@1@opensky-network.org/api/flights/all?begin=1517184000&end=1517188000'
    axios.get(endPoint)
      .then(response => {
        setLoading(false);
        setData(response.data)
        setError(false)
      }).catch(err => {
        console.log(err)
        setError(true)
        setLoading(false)
        setData(null)
      })
  }, []);

  return (
    <div>
      <Navigbar2 link="/" page="LOG OUT" />
      <Container>
          <div className='my-2'>
            <p className='font-32 text-pink fst-italic font-500'>All Flights</p>
          </div>
          {
            loading && 
            <div className="my-5 text-center">
              <Image src={Spinner} fluid />
              <div className="my-2">
                <p className="text-agreen font-15 font-500">Loading...</p>
              </div>
            </div>
          }
          {
            error && 
            <div className="my-5 text-center">
              <Image src={ErrorImg} fluid />
              <div className="my-2">
                <p className="text-danger font-15 font-500">Error fetching the data</p>
              </div>
            </div>
          }
          <div className="d-flex justify-content-end">
            <div>
              <p className="text-agreen font-15 font-500">Date : {moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
          </div>
          <Row>
            {
              data && 
              <Row> 
                <div className="col-12 my-4">
                  <div className="shadow-sm p-3 bg-light">
                    <p className="text-pink font-16 font-700">Format</p>
                    <p className="text-agreen font-14 font-700">Airport | Time | Arriving | Departing</p>
                  </div>
                </div>
                {data.map(flight => (
                  <div className="col-12 col-md-3 mt-2">
                    <div className="shadow-sm p-3 bg-light">
                      <p className="text-agreen font-14 font-700">{ flight.icao24 } | { moment(Date.now()).format('h:mm:ss a') } | { moment(flight.firstSeen).format('h:mm:ss a') } | { moment(flight.lastSeen).format('h:mm:ss a') }</p>
                    </div>
                  </div>
                ))}
              </Row>
            }
          </Row>
      </Container>
    </div>
  )
}

export default Dashboard