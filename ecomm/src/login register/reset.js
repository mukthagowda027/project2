import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:3005/user/reset-password/${token}`, {
        password: password,
        confirmPassword: confirmPassword,
      });

      setMessage(response.data.msg);
    } catch (error) {
      console.error('Error resetting password:', error.message);
      setMessage('Error resetting password');
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-4 offset-4 mt-5 mb-5 d-flex flex-column align-items-center justify-content-center"
            style={{
              height: "400px",
              width: "400px",
              border: "1px solid lightgrey",
              borderRadius: "10px",
              boxShadow: "7px 7px 8px #888888",
            }}
          >
            <form method="post" encType="multipart/form-data">
              <div className="mb-4">
                <h4 style={{ textAlign: "center" }}>Reset Password</h4>
              </div>
              <div className="mb-3 d-flex flex-column">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 d-flex flex-column">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button onClick={handleResetPassword} className='btn btn-primary'>Reset Password</button>
              {message && <p style={{ color: 'green' }}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
