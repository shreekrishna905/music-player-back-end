const Song = require('../models/song')

exports.findAll = (req,res,next) => {
    let keyword = req.query.keyword;
    if(keyword!=null || keyword!=undefined){
        res.status(200).json(Song.search(keyword));
    } else {
        res.status(200).json(Song.findAll());
    }
}