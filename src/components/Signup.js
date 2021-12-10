import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.scss';
import { Card, Form, Button, Alert } from 'react-bootstrap';


export default function SignUp() {
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
    <div>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef}></Form.Control>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" ref={passwordRef}></Form.Control>
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="text" ref={passwordConfirmRef}></Form.Control>
          </Form.Group>
          <Button disabled={loading} type="submit">Sign Up</Button>
        </Form>
      
      </Card>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>

  )
}

