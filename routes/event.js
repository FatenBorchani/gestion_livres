const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');
const validate  = require('../Middleware/event');

// Créer un événement
router.post('/add', validate.validateEvent, eventController.createEvent);

module.exports = router;
