const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const responseData = [
    "fishingrods"
  ];
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

router.get('/fishingrods', (req, res) => {
  const responseData = [
    "simplerod",
    "birchrod",
    "oakrod",
    "beechrod",
    "advancerod",
    "ashrod",
    "whiteoakrod"
  ];
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});


const simplerodRouter = require('./fishingrods/simplerod');
const birchrodRouter = require('./fishingrods/birchrod');
const oakrodRouter = require('./fishingrods/oakrod');
const beechrodRouter = require('./fishingrods/beechrod');
const advancerodRouter = require('./fishingrods/advancerod');
const ashrodRouter = require('./fishingrods/ashrod');
const whiteoakrodRouter = require('./fishingrods/whiteoakrod');

router.use('/simplerod', simplerodRouter);
router.use('/birchrod', birchrodRouter);
router.use('/oakrod', oakrodRouter);
router.use('/beechrod', beechrodRouter);
router.use('/advancerod', advancerodRouter);
router.use('/ashrod', ashrodRouter);
router.use('/whiteoakrod', whiteoakrodRouter);

module.exports = router;