const express = require('express');
const router = express.Router();

const simplerod = require('./simplerod');
const birchrod = require('./birchrod');
const oakrod = require('./oakrod');
const beechrod = require('./beechrod');
const advancerod = require('./advancerod');
const ashrod = require('./ashrod');
const whiteoakrod = require('./whiteoakrod');

router.get('/', (req, res) => {
  res.json([simplerod, birchrod, oakrod, beechrod, advancerod, ashrod, whiteoakrod]);
});

module.exports = router;