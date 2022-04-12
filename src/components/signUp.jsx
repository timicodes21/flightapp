import React, { useState } from 'react'
import { Form, Row, Container, Image } from 'react-bootstrap';
import usePasswordShow from '../hooks/usePasswordShow'
import { Link } from "react-router-dom"
import Image2 from "../assets/image2.jpg"
import Navigbar2 from './navigbar2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { passwordShow, showPassword } = usePasswordShow();
    const [match, setMatch] = useState(null)
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const navigate = useNavigate()
    const handleMatch = () => {
        if(password === confirmPassword){
            setMatch(true)
        } else {
            setMatch(false)
            setText('password does not match')
        }
    }

    const handleTest = () => {
        if(!pattern.test(password)){
            setText1('Your password must be at and must least 8 letters and must contain uppercase, lowercase, a number and a special character')
        }
        else{
            setText1('Great password')
        }
    }

    const handleSubmit = () => {
        navigate('/login')
    }

  return (
      <div>
        <Navigbar2 link="/" page="HOME" />
        <Container className="p-md-5">
            <div className='my-2 text-center'>
                <p className='font-32 text-agreen fst-italic font-500'>Create an Account</p>
            </div>
            <Form onSubmit={handleSubmit}>
                <Row className="my-5">
                    <div className="col-12 col-md-6">
                        <Row>
                            <div className="col-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p className="font-14 text-green pt-1 font-500">First Name</p></Form.Label>
                                    <Form.Control required className="login-input p-3" type="text" placeholder="firstname" />
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p className="font-14 text-green pt-1 font-500">Last Name</p></Form.Label>
                                    <Form.Control required className="login-input p-3" type="text" placeholder="lastname" />
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p className="font-14 text-green pt-1 font-500">Email Address</p></Form.Label>
                                    <Form.Control required className="login-input p-3" type="email" placeholder="email" />
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p className="font-14 text-green pt-1 font-500">Password</p></Form.Label>
                                    <Form.Control required value={password} onChange={e => setPassword(e.target.value)} onKeyUp={handleTest} className="login-input p-3" type={passwordShow ? "text" : "password"} placeholder="password" />
                                    {<p className="font-14 pt-1 font-500 text-pink">{text1}</p>}
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><p className="font-14 text-green pt-1 font-500">Confirm Password</p></Form.Label>
                                    <Form.Control required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onKeyUp={handleMatch} className="login-input p-3" type={passwordShow ? "text" : "password"} placeholder="password" />
                                </Form.Group>
                                <Form.Group className="mb-3 font-14 text-green pt-1 font-500" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" className="font-15" onClick={showPassword} label="show password" />
                                </Form.Group>
                                {match? (<p className="font-14 text-green pt-1 font-500 text-success">correct password</p>) : <p className="font-14 pt-1 font-500 text-pink">{text}</p>}
                            </div>
                            <div className="col-12 mt-3">
                                <button type="submit" className="font-20 w-100 font-600 text-white bg-agreen rounded p-2 bor2">Sign Up</button>
                            </div>
                            <p className="font-15 font-400 text-center text-agreen pt-3">Already have an account? <Link to="/login" className="font-16 mt-4 pt-2 font-500 text-pink">Login</Link></p>
                        </Row>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <Image src={Image2} className="rounded" fluid />
                    </div>
                </Row>
            </Form>
        </Container>
    </div>
  )
}

export default SignUp