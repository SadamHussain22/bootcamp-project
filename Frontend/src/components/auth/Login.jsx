import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
  
import axios from "axios";
function  Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMassage]=useState('');
  const navigate = useNavigate('');

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    try {
      // Send a POST request to your login API
      const response = await  axios.get('http://localhost:5566/api/login', {
        email,
        password,
      });
      //local storage
      console.log("ssgfkjsgdfkjsgdkf",response.data.token);
      
      if (response.email === 'admin123@gmail.com' && response.password === 'admin123') {
        alert('Successfully login as admin')
        navigate('/dashboard')
      }
      else if (response.email!==email||response.password!==password)  {
        setMassage("Email and password are corrects")
        localStorage.setItem('token',response.data.token)
        //alert('successfully login with any credentials')
        navigate('/App')
      }
      else{
        console.log("sdasfdasfas",)
        setMassage("Email and password not match")
      }
      // Handle the successful login here, e.g., store the token, redirect, etc.
      console.log('Login successful', response.data);

    } catch (error) {
      setMassage("Email and password not match")
      // Handle login errors here, e.g., display an error message to the user
      console.error('Login failed', error);
    }
    
   


  };
  return (
    <div>
      <h2>Sign In</h2>
      <form action="" className="signup-form" onSubmit={handleSubmit}>
        <input type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  />
        <input type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}   />

        <button Submit={handleSubmit}>Sign In</button>
        <p>Create new  account? <Link to="/SignUp">Sign Up</Link></p>
      </form>
      <p className="succsess-Message"> {message}</p>
    </div>
  )
}

export default Login
