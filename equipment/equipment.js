const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const responseData = [
    "/pickaxes",
    "/fishingrods",
    "/hatchets"
  ];
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

router.get('/fishingrods', (req, res) => {
  const responseData = [
    "/simplerod",
    "/birchrod",
    "/oakrod",
    "/advancerod"
  ];
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});


const simplerodRouter = require('./fishingrods/simplerod');
const birchrodRouter = require('./fishingrods/birchrod');
const oakrodRouter = require('./fishingrods/oakrod');
const advancerodRouter = require('./fishingrods/advancerod');

router.use('/simplerod', simplerodRouter);
router.use('/birchrod', birchrodRouter);
router.use('/oakrod', oakrodRouter);
router.use('/advancerod', advancerodRouter);

module.exports = router;