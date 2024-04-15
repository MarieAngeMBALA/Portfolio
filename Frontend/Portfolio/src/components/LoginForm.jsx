import React, { useState } from 'react';
import './LoginForm.css';
import loginIcon from '../assets/loginIcon.png';
import SignUpModal from '../components/SignupModal';

const LoginForm = ({ onLoginClick }) => {

  const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

  return (
    <div className="login-container">
      <h1 className='title'>WELCOME To My PORTFOLIO</h1>
      <p>Log-in to have more details about me</p>
      <div className="login-box">
        <div className="login-title">
          <img src={loginIcon} alt="Login Icon" style={{ height: '140px' }} />
        </div>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <div className="forgot-password">
          <a href="/reset-password" style={{ color: 'inherit' }}>Forgot password?</a>
        </div>
        <button type="submit" onClick={onLoginClick}>Login</button>
      </div>
      <div className="signup-link">To create a new account, 
      <a href="#" onClick={handleOpenModal} style={{ color: 'inherit' }}>Click here!</a>
      </div>
      <SignUpModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default LoginForm;