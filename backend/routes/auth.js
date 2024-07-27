const express = require('express');
const router = express.Router();
const passport = require('passport');
const { googleAuth, googleAuthCallback, getCurrentUser } = require('../controllers/authController');
const { protect } = require('../middlewares/auth');

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);
router.get('/me', protect, getCurrentUser);

module.exports = router;
