
const jwt = require('jsonwebtoken')
const Role = require('../models/Roles')
const auth0 = require('auth0-js');


require('dotenv').config();

const auth0Config = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: 'http://your-app/callback' // Reemplaza con la URL de redireccionamiento adecuada para tu aplicación
};
const singupHandler = async (req, res) => {
    const { username, email } = req.body;
  
  // Generar una URL de registro de Auth0 para el nuevo usuario
  const signupUrl = auth0Client.signup({
    username,
    email,

  });

  // Redireccionar al usuario a la URL de registro de Auth0
  res.redirect(signupUrl);
}

const signinHandler = async (req, res) => {
    const { email } = req.body;

    // Generar una URL de inicio de sesión de Auth0 para el usuario
    const loginUrl = auth0Client.login({
      username: email,
   
    });
  
    // Redireccionar al usuario a la URL de inicio de sesión de Auth0
    res.redirect(loginUrl);
 
}

module.exports = {
    singupHandler,
    signinHandler
}