import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.scss';
import { Card, Form, Button, Alert } from 'react-bootstrap';


function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log("we're here")
      history("../", { replace: true });
    } catch (error) {
      console.log(error)
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <>
      <Card className = "card" style={{backgroundColor: 'transparent'}}>
      <Card.Body>
        <h1>Sign up</h1>
        <p>Have an account? <Link className = "link" to="/login"> Log In</Link></p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} required type="text"></Form.Control>
          <Form.Label>Password (>6 characters)</Form.Label>
          <Form.Control ref={passwordRef} type="text"></Form.Control>
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control ref={passwordConfirmRef} type="text"></Form.Control>
          <Button variant="primary" disabled={loading} type="submit">sign up</Button>
        </Form>
      
      </Card.Body>
      
      </Card>
    </>
  );
}

export default SignUp;
