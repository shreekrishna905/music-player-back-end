const User = require('../models/user');

exports.playlist = (req,res,next) =>{
    const username = User.findUserByAccessToken(req.headers["x-access-token"]);
    res.status(200).json(User.findPlaylistByUserName(username));
} 