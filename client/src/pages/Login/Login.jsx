import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png"
import loginVector from "../../assets/loginVector.svg";
import studentLogin from "../../assets/studentLogin.svg"
const Login = () => {
  const [formInputs, setformInputs] = useState({})

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setformInputs(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formInputs);
  }
  return (
    <div className="loginWrapper">
      {/* Logo and Image */}
      <div className="leftHalfLogin">
        {/* Header */}
        <header>
          <img src={logo} alt="College logo" id="collegLogo" />
        </header>

        {/* VECTOR IMAGE */}
        <div>
          <img src={loginVector} alt="login vector" id="loginVector" />
        </div>
      </div>

{/* <!--Login FORM --> */}
      <div className="rightHalfLogin">
        {/* Inner Content Right Half */}
        <div id="innerContentLogin">
          <h2>WELCOME BACK</h2>
          <img src={studentLogin} alt="student Login" />
          <form onSubmit={handleSubmit}>
            <label>
              College ID:
              <input type="text" name="collegeId" value={formInputs.collegeid} onChange={handleChange}/>
            </label>

            <label>
              Password:
              <input type="password" name="Password" value={formInputs.password} onChange={handleChange}/>
            </label>

            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
