const express = require('express');

const router = express.Router();

const dahila = require('./dahila');
const flax = require('./flax');
const daisy = require('./daisy');
const vinca = require('./vinca');
const night = require('./night');
const amar = require('./amar');
const sun = require('./sun');
const blue = require('./blue');
const ice = require('./ice');
const moon = require('./moon');
const shade = require('./shade');
const purple = require('./purple');
const shadow = require('./shadow');
const poison = require('./poison');
const blossom = require('./blossom');

router.use('/dahila', dahila);
router.use('/flax', flax);
router.use('/daisy', daisy);
router.use('/vinca', vinca);
router.use('/night', night);
router.use('/amar', amar);
router.use('/sun', sun);
router.use('/blue', blue);
router.use('/ice', ice);
router.use('/moon', moon);
router.use('/shade', shade);
router.use('/purple', purple);
router.use('/shadow', shadow);
router.use('/poison', poison);
router.use('/blossom', blossom);

router.get('/', (req, res) => {
    const responseData = ["dahila", "flax", "daisy", "vinca", "night", "amar", "sun", "blue", "ice", "moon", "shade", "purple", "shadow", "poison", "blossom"];
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
  });

module.exports = router;