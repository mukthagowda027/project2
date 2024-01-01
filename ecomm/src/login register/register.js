import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('username', formData.username);
    form.append('email', formData.email);
    form.append('password', formData.password);

    try {
      const response = await axios.post("http://localhost:3005/user/register", form,{
        headers: {
            "Content-Type": "application/json",
          },
  
      });
      alert("Registration Successfull")
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };
    
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-4 offset-4 mt-5 mb-5 d-flex flex-column align-items-center justify-content-center"
            style={{
              height: "500px",
              width: "400px",
              border: "1px solid lightgrey",
              borderRadius: "10px",
              boxShadow: "7px 7px 8px #888888",
            }}
          >
            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
              <div className="mb-4">
                <h4 style={{ textAlign: "center" }}>Register your Account</h4>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  User name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={handleChange}
                />
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
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <div className="mt-3">
                <p>
                  <Link to="/login">Already a user? Click here to login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;


