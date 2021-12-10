import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styles.scss';
import { Card, Form, Button, Alert } from 'react-bootstrap';


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      console.log("we're here")
      history("../", { replace: true });
    } catch (error) {
      console.log(error)
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2>Log In</h2>
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
          <Button disabled={loading} type="submit">Log In</Button>
        </Form>
      
      </Card>
      <p>Need an Account? <Link to="/signup">Sign Up</Link></p>
    </div>

  )
}

