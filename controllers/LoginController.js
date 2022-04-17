const User = require('../models/user');

exports.login = (req,res,next) =>{
    let credentials = req.body;
    const accessToken = User.login(credentials.username, credentials.password);
    res.status(200).json({access_token:accessToken});
} 