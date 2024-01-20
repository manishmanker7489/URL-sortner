const mongoose = require('mongoose');

const urlShema = new mongoose.Schema({
    shortId : {
        type : String,
        require : true,
        unique: true
    },
    redirectUrl :{
        type : String,
        require : true,
    },
    visitHistory : [ { timestamp : { type : Number } } ],
},
{ timestamps : true }
);

const URL = mongoose.model("url",urlShema);

module.exports = URL; 