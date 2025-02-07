import React from "react";
import { useNavigate } from "react-router";
import kisasi from "../assets/kisasi.jpg";
import logo from '../assets/logo.png';
import "./signup.css";


const signup =()=> {
  const navigate = useNavigate()
const gotoDocumenttitle=()=>{
  navigate("/Documenttitle")
}
  return (
    <div>
      <div className="login-wrapper2">
        <div className="container">
          <div className="signuplogo">
            <img src={logo} className="signup-logo" alt="Logo"/>
          </div>
         
          
          <div className="formbutton2">
            <form className="signup-form">
              <input
                type="email"
                placeholder="Enter Password"
                className="google-input-with-icon2"
                required
              />
              <div className="or"></div>
              <input
                type="email"
                placeholder="Confirm Password"
                className="email-input2"
                required
              />
            </form>
          </div>
          <button type="submit" class="submitbutton2" onClick={gotoDocumenttitle}>
            Set password
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default signup;
