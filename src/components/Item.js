import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import '../styles/styles.scss';
import { Card, Form, Button, Alert } from 'react-bootstrap';


export default function Item() {
    const [error, setError] = useState("")
    const { logout, currentUser } = useAuth()
    const history = useNavigate()

    async function handleSubmit(e) {
      // e.preventDefault()
  
      // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      //   return setError("Passwords do not match")
      // }
  
      // try {
      //   setError('')
      //   setLoading(true)
      //   await signup(emailRef.current.value, passwordRef.current.value)
      //   console.log("we're here")
      //   history("../", { replace: true });
      // } catch (error) {
      //   console.log(error)
      //   setError('Failed to create an account')
      // }
      // setLoading(false)
    }

    async function handleLogout(e) {
        e.preventDefault()
        
        setError('')
        try{
          await logout()
          console.log("hello")
          history("../login", { replace: true })
        } catch {
          setError('Failed to log out')
        }
      }

    return(
        <div>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
            <h1>Profile</h1>
            <strong>Email:</strong> {currentUser && currentUser.email}
            <button className = "link" variant="link" onClick={handleLogout}>Log Out</button>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name"></Form.Control>
            <Form.Label>Link</Form.Label>
            <Form.Control type="text" placeholder="Add a Link to the Item here"></Form.Control>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Color, type, brand, etc."></Form.Control>
            <Form.Label>Quantity</Form.Label>
            <Form.Control  type="text"></Form.Control>
            <button type="submit">save</button>
            </Form>
          
          </Card.Body>
        
        </Card>
        </div>
    )
}