import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import Dashboard from './components/dashboard';
import NotFound from './components/notFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App