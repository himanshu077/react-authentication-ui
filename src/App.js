import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Signup from "./auth/Signup/Signup";
import SignIn from "./auth/SignIn/SignIn";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import VerifyEmail from "./auth/VerifyEmail/VerifyEmail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
