import React from "react"
import SignUp from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
// import Login from "./Login"
// import PrivateRoute from "./PrivateRoute"

function App() {
  console.log("hello")
  return (

      <Container className="d-flex align-items-center justify-content-center" style = {{ minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth:'400px'}}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<SignUp/>}></Route>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
    
  )
}

export default App
