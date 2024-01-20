 
const shortid = require('shortid');
const URL = require('../models/url');

 async function handelShortUrl( req,res ){
     const body = req.body;
     if(!body.url) return res.status(400).json({ error : "url is requires" }) 
     const shortId = shortid();

    await URL.create({
        shortId : shortId,
        redirectUrl: body.url,
        visitHistory : []
    });

    return res.render('home' , {id : shortId })

     
 }

 async function handelID( req, res ){
    const shortId = req.params.id;
    const entry =   await URL.findOneAndUpdate( {shortId} ,
         { $push : {
            visitHistory : { timestamp : Date.now()  }
         } } );

      res.redirect(entry.redirectUrl);    
 }

 async function handeanalytics (req,res){
    const id = req.params.id;
    const result = await URL.findOne( { shortId : id } );
    return res.json({ totalclicks : result.visitHistory.length ,
         analytics : result.visitHistory });
         
 }

 module.exports = {
    handelShortUrl,
    handelID,
    handeanalytics,
 }