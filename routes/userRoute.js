const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/playlists', userController.playlist);
router.post('/playlists/tracks', userController.addTrack);
router.delete('/playlists/tracks/:trackId', userController.removeTrack);

module.exports = router;