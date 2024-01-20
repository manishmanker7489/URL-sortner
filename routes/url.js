const express = require('express');

const { handelShortUrl , handelID , handeanalytics } = require('../controllers/url')

const router = express.Router();

router.post("/" , handelShortUrl);

router.get("/:id" , handelID );

router.get("/analytics/:id" , handeanalytics );

module.exports = router;

