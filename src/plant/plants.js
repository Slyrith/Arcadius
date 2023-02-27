const express = require('express');

const router = express.Router();

const dahila = require('./dahila');
const flax= require('./flax');
const daisy= require('./daisy');

router.use('/dahila', dahila);
router.use('/flax', flax);
router.use('/daisy', daisy);

router.get('/', (req, res) => {
    const responseData = ["dahila", "flax", "daisy"];
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
  });

module.exports = router;