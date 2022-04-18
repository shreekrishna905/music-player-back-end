const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/',userController.playlist);
router.post('/tracks', userController.addTrack);
router.delete('/tracks/:trackId', userController.removeTrack);

module.exports = router;