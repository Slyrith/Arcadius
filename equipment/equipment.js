const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(["/equipment/pickaxes", "/equipment/fishingrods", "/equipment/hatchets"]);
});

router.get('/fishingrods', (req, res) => {
  res.json(["/equipment/simplerod", "/equipment/birchrod", "/equipment/oakrod", "/equipment/advancerod"]);
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