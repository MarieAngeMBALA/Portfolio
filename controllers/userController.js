const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//Génerer un refresh token
const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3d' }); 
  };
  
// Se connecter
exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Trouver l'utilisateur dans la base de données
      const user = await User.findOne({ username });
  
      // Vérifier si l'utilisateur existe
      if (!user) {
        return res.status(401).json({ error: 'Invalid Username or password' });
      }
  
      // Vérifier le mot de passe
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid Username or password' });
      }
  
      // Générer un token JWT avec la clé secrète d'accès
      const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3d' });

      // Générer un refresh token
        const refreshToken = generateRefreshToken(user._id);
  
      res.status(200).json({ accessToken, refreshToken});
    } catch (error) {
      console.error('User authentication error :', error);
      res.status(500).json({ error: 'User authentication error' });
    }
  };