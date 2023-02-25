const express = require('express');

const router = express.Router();

const worm = require('./worm');
const insect= require('./insect');

router.use('/insect', insect);
router.use('/worm', worm);

router.get('/', (req, res) => {
    const responseData = ["worm", "insect"];
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
  });

module.exports = router;