import React, { useState } from 'react';
// import { useAuth } from "../contexts/AuthContext";
// import { Link, useNavigate } from "react-router-dom"
// import PrivateRoute from '../components/PrivateRoute';
import '../styles/styles.scss';
import {Button} from 'react-bootstrap';

function Home() {
  // const [error, setError] = useState("")
  // const { logout, currentUser } = useAuth()
  // const history = useNavigate()

  // async function handleLogout() {
  //   setError('')
  //   try{
  //     await logout()
  //     history("./login", { replace: true })
  //   } catch {
  //     setError('Failed to log out')
  //   }
  // }

  
  return (
    <div>
      <h1>Profile</h1>
      
      <h1>Your Items</h1>
      
    </div>
  );
}

export default Home;

// <strong>Email:</strong> {currentUser && currentUser.email}
      // <button variant="link" onClick={handleLogout}>Log Out</button>
      // <Link to="/item"><Button className="small_button">Add Item +</Button></Link>