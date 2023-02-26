const express = require('express');
const router = express.Router();

const simplerod = require('./simplerod');
const birchrod = require('./birchrod');
const oakrod = require('./oakrod')
const advancerod = require('./advancerod')
// Add more fishing rod equipment here

router.get('/', (req, res) => {
  res.json([simplerod, birchrod, oakrod, advancerod]); // Return the list of fishing rods
});

module.exports = router;