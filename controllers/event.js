const Event = require('../models/event');


exports.createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({ message: 'Événement créé avec succès', event: newEvent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
