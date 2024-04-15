import React from 'react';
import Modal from 'react-modal';
import './SignupModal.css'

Modal.setAppElement('#root'); 

const SignUpModal = ({ isOpen, onRequestClose, onSignUpSubmit }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={false}
            className="signup-modal"
            overlayClassName="overlay"
        >
            <h2>Create a new account</h2>
            <form className="signup-form">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Nom d'utilisateur" required />
                
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Mot de passe" required />
                
                <button type="submit" className="btn-submit">Créer un compte</button>
            </form>
            <button onClick={onRequestClose} className="close-button">x</button>
        </Modal>
    );
};

export default SignUpModal;
