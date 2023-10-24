import React, { useState } from "react";
import { Link} from "react-router-dom";
 
import axios from "axios";
const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [phone,setPhone]=useState("");
    // const [gender,setGender]=useState("");
    const [successMessage, setSuccessMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you have defined username, email, and password somewhere
        const formdata = { username, email, password }; 
        console.log(formdata)
        axios.post("http://localhost:5566/api/registerUser", formdata )
            .then((response) => {
                console.log("Response", response.data);
                setSuccessMessage("Your account is successfuly created now you can login")
            })
            
            .catch((err) => {
                console.error("hfkjsdfas%%%%%5",err)
                console.log("Error:", err);
            });

        };
    
    return (
        <div styl={{display: "flex", justifyContent:'center'}}>
            <h2 style={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "35px", display: "flex", marginTop: "2%", justifyContent:"center"}}>Sign Up</h2>
            <form action="" className="signup-form" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="username"
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="email"
                    placeholder="email"
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {/* <input type="tel"
            placeholder="phone No" required
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}/> */}
                {/* <select  id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="mail">Mail</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select> */}
                <button>Sign Up</button>
                <p style={{ fontFamily: "Poppins, sans-serif" , fontSize: "13px"}}>Already have an account? <Link to="/Login">Login</Link></p>
            </form>
            <p className="succsess-Message"> {successMessage}</p>
        </div>
    )

}
export default SignUp