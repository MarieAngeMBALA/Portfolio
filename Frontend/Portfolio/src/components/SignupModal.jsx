import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './SignupModal.css'

Modal.setAppElement('#root'); 

const SignUpModal = ({ isOpen, onRequestClose, onSignUpSubmit }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        
        try {
            console.log(`username: ${username} pwd: ${password}`);
            //const res = await axios.post('http://localhost:3000')
            const response = await axios.post('http://localhost:3000/api/users/register', {
                username,
                password
            });
    
            if (response.status === 201) {
                alert('Compte créé avec succès!');
                onRequestClose(); // Fermez le modal
            } else {
                // Cela ne devrait normalement pas se produire, car axios lancerait une exception pour les réponses hors de 2xx
                alert(response.data.message || 'Erreur lors de la création du compte.');
            }
        } catch (error) {
            console.log(error);
            const message = error.response
            
                ? error.response.data.message
                : 'Erreur de connexion au serveur.';
            alert(message);
        }
    };

    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={false}
            className="signup-modal"
            overlayClassName="overlay"
        >
            <h2>Create a new account</h2>
            <form className="signup-form" onSubmit={handleSignUpSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Nom d'utilisateur" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                <button type="submit" className="btn-submit">Créer un compte</button>
            </form>
            <button onClick={onRequestClose} className="close-button">x</button>
        </Modal>
    );
};

export default SignUpModal;
