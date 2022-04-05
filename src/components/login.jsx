import React from 'react'
import { Form, Row, Container, Image } from 'react-bootstrap';
import usePasswordShow from '../hooks/usePasswordShow'
import { Link } from "react-router-dom"
import Image2 from "../assets/image2.jpg"

const Login = () => {
    const { passwordShow, showPassword } = usePasswordShow();
  return (
    <Container className="p-5">
        <div className='my-2 text-center'>
            <p className='font-32 text-agreen fst-italic font-500'>Login to your account</p>
        </div>
        <Form>
            <Row className="my-5">
                <div className="col-12 col-md-6">
                    <Row>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><p className="font-14 text-green pt-1 font-500">Email Address</p></Form.Label>
                                <Form.Control required className="login-input p-3" type="email" placeholder="email" />
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><p className="font-14 text-green pt-1 font-500">Password</p></Form.Label>
                                <Form.Control required className="login-input p-3" type={passwordShow ? "text" : "password"} placeholder="password" />
                            </Form.Group>
                            <Form.Group className="mb-3 font-14 text-green pt-1 font-500" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className="font-15" onClick={showPassword} label="show password" />
                            </Form.Group>
                        </div>
                        <div className="col-12 mt-3">
                            <button type="submit" className="font-20 w-100 font-600 text-white bg-agreen rounded p-2 bor2">Login</button>
                        </div>
                        <p className="font-15 font-400 text-center text-agreen pt-3">Don't have an account? <Link to="/sign-up" className="font-16 mt-4 pt-2 font-500 text-pink">Sign Up</Link></p>
                    </Row>
                </div>
                <div className="col-12 col-md-6 d-none d-md-block">
                    <Image src={Image2} className="rounded" fluid />
                </div>
            </Row>
        </Form>
    </Container>
  )
}

export default Login