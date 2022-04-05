import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App