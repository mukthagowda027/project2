import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from './usercontext';
import axios from "axios";


const Login=()=>{
  const { login } = useUser();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData();
        form.append('email', formData.email);
        form.append('password', formData.password);
    
        try {
          const response = await axios.post("http://localhost:3005/user/login", form,{
            headers: {
                "Content-Type": "application/json",
              },
      
          });
          login(response.data._id);
          alert("Login successful")
       console.log('User ID:', response.data._id);
      console.log('Login successful:', response.data);

        } 
        catch (error) {
          console.error("Error registering user:", error.message);
        }
      };


      const handleForgotPassword = async () => {
        try {
          const response = await axios.post('http://localhost:3005/user/forgot-password', {
            email: formData.email,
          });
        
          alert(response.data.msg);
        } catch (error) {
          console.error('Error sending forgot password request:', error.message);
        }
      };


    return(
        <>
          <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-5 mb-5 d-flex flex-column align-items-center justify-content-center" 
                style={{height:"400px",width:"400px",border:"1px solid lightgrey",borderRadius:"10px",boxShadow:"7px 7px 8px #888888"}}>

               <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                    <div className="mb-4">
                        <h4 style={{textAlign:"center"}}>Login</h4>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        />
                        <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                        </div>
                   </div>
                <div className="mb-3">
                    <div className="d-flex justify-content-between">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <span onClick={handleForgotPassword} className="text-decoration-none" style={{ cursor: 'pointer', color: 'blue' }}>
                        Forgot password?
                       </span>

                    </div>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handleChange}
                    />
                </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <div className="mt-3">
                        <p><Link to="/register">New user?register now</Link></p>
                    </div>
                    </form>
                </div>
            </div>
          </div>
        </>
    )
}

export default Login;