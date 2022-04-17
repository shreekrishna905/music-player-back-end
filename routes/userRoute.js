const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/playlists', userController.playlist);

module.exports = router;