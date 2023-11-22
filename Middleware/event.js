const Joi = require('joi');
const eventSchema = Joi.object({
  title: Joi.string().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required()
});

// Middleware de validation pour la création d'événement
exports.validateEvent = (req, res, next) => {
  const { error } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
