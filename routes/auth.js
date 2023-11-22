const express = require("express");
const router = express.Router();
const userController = require("../controllers/auth");
const validateMid = require('../Middleware/auth');

router.post("/signup", validateMid.validateSignup, userController.signup);

// Route pour la connexion, sans middleware de validation spécifique
router.post("/login", userController.login);

module.exports = router;
