const User = require('../models/user');

exports.playlist = (req,res,next) =>{
    const username = User.findUserByAccessToken(req.headers["x-access-token"]);
    res.status(200).json(User.findPlaylistByUserName(username));
} 


exports.addTrack = (req,res,next) => {
    const username = User.findUserByAccessToken(req.headers["x-access-token"]);
    User.addSongToPlaylist(username,req.body);
    res.status(200).send();
}


exports.removeTrack = (req,res,next) => {
    const username = User.findUserByAccessToken(req.headers["x-access-token"]);
    User.removeSongFromPlaylist(username,req.params.trackId);
    res.status(200).send();
}