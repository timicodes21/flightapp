import React from 'react'
import { Container, Row } from "react-bootstrap"
import LandingPage from './landingPage'
import Navigbar from './navigbar'

const Home = () => {
  return (
    <div className="home"> 
      <Navigbar />
      <Container className="p-2">
        <LandingPage />
      </Container>
    </div>
  )
}

export default Home