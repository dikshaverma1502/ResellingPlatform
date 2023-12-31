import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { Firebase } from "../../firebase/config";
import Logo from "../../olx-logo.png";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate("/")
    }).catch((error)=>{
      alert(error.message)
    })

  };
  return (<>
    {loading && <RoundLoading/> }
    <div className="background">
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="diksha@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="label">Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button className="btn">Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div> 
    </div>
    </>
  );
}

export default Login;
