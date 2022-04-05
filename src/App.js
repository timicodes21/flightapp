import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App