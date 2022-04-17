const User = require('../models/user');

exports.userPlaylist = (req,res,next) =>{
    const userId= req.params.userId;
    const accessToken = User.login(credentials.username, credentials.password);
    res.status(200).json({access_token:accessToken});
} 