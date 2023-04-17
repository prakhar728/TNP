import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png"
import loginVector from "../../assets/loginVector.svg";
import studentLogin from "../../assets/studentLogin.svg";
import baseURL from '../../Common';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [formInputs, setformInputs] = useState({
    smartId:"",
    password:""
  })
const navigate = useNavigate();

  // STORING JWT TOKEN IF PRESENT
  const JWT_TOKEN = localStorage.getItem("JWT");

  // FETCH THE USER IF JWT ALREADY PRESENT
  useEffect(() => {
    alreadyLoggedIn();

    if(JWT_TOKEN)
    axios
      .get(`${baseURL}/api/auth/fetchUser`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
        alreadyLoggedIn();
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //REACT TOASTS FOR LOGGIN AND VARIANTS
  const alreadyLoggedIn = () =>{
    toast.info('Already Logged In! Redirecting to Dashboard.',{
      onClose:() => navigate('/dashboard')
    })
  }
  const loginSuccess = () =>{
    toast.success('Login Succesfull!',{
      onClose:() => navigate('/dashboard')
    });
  }
  const loginError = () =>{
    toast.error('Error while Trying to log you in!');
  }


  const handleChange = (e) =>{
    console.log("changed");
    const name = e.target.name;
    const value = e.target.value;
    setformInputs(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formInputs);


    // if(formInputs.smartId.slice(0,5)!="btbti")
    // return alert("Need a Banasthali Smart Card Id")

    axios.post(`${baseURL}/api/auth/login`,formInputs)
    .then(res=>{
      localStorage.setItem('JWT', res.data.authToken);
      if(res.data.status)
      loginSuccess();
    })
    .catch(err=>{
      console.log(err);
      loginError();
    })
  }
  return (
    <div className="loginWrapper">
      {/* Logo and Image */}
      <ToastContainer />
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
            Registration Number:
              <input type="text" name="smartId" value={formInputs.smartId} onChange={handleChange}/>
            </label>

            <label>
              Password:
              <input type="password" name="password" value={formInputs.password} onChange={handleChange}/>
            </label>

            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
