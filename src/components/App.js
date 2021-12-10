import React from "react"
import SignUp from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
// import { Router, Routes, Route, withRouter } from "react-router-dom"
import Home from "./Home"
// import Login from "./Login"
// import PrivateRoute from "./PrivateRoute"

function App() {
  console.log("hello")
  return (

    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style = {{ minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth:'400px'}}>
          <SignUp />
        </div>
      </Container>
    
    </AuthProvider>
    
  )
}

export default App
