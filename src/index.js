import React from "react";
import ReactDOM from "react-dom"
// import { BrowserRouter } from "react-router-dom";
import App from "./components/App"
// import Signup from "./components/Signup"
// import { Container } from "react-bootstrap"
// import { AuthProvider } from "./contexts/AuthContext"
// import { Router, Routes, Route, withRouter } from "react-router-dom"
// import Home from "./components/Home"
// import Login from "./components/Login"
// import PrivateRoute from "./components/PrivateRoute"


ReactDOM.render(
  <App />
  
  ,
  document.getElementById("root")
)


// <BrowserRouter>
//     <AuthProvider>
//       <Routes>
//         <PrivateRoute exact path="/" component={<Home />} />
//         <Route path="/signup" component={<Signup />} />
//         <Route path="/login" component={<Login />} />
//       </Routes>
//     </AuthProvider>
//   </BrowserRouter>