const Joi = require('joi');

// Middleware de validation pour les données de la requête /signup
const validateSignup = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    lastname: Joi.string().required(),
    firstname: Joi.string().required(),
    role: Joi.string().valid('Admin', 'User').required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next(); 
};

module.exports = {validateSignup}
