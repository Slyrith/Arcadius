const express = require('express');

const router = express.Router();

const chibi = require('./chibi');
const magma= require('./magma');

router.use('/chibi', chibi);
router.use('/magma', magma);

router.get('/', (req, res) => {
    const responseData = ["chibi", "magma"];
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
  });

module.exports = router;