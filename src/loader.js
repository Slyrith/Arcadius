const express = require('express');
const equipment = require('./equipment/equipment');

const router = express.Router();

router.get('/', (req, res) => {
    const responseData = {
      Title: "Arcadius API",
      Description: "Work in progress",
      Status: "Online",
      Routes: [
        "/equipment",
        "/bait",
        "/island",
        "/plants"
      ]
    };
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
  });

router.use('/equipment', equipment);

router.use('/island', require('./island/islands'));
router.use('/chibi', require('./island/chibi'));
router.use('/magma', require('./island/magma'));

router.use('/bait', require('./bait/bait'));
router.use('/bait/worm', require('./bait/worm'));
router.use('/bait/insect', require('./bait/insect'));

router.use('/equipment/fishingrods', require('./equipment/fishingrods/fishingrods'));
router.use('/equipment/fishingrods/simplerod', require('./equipment/fishingrods/simplerod'));
router.use('/equipment/fishingrods/birchrod', require('./equipment/fishingrods/birchrod'));
router.use('/equipment/fishingrods/oakrod', require('./equipment/fishingrods/oakrod'));
router.use('/equipment/fishingrods/beechrod', require('./equipment/fishingrods/beechrod'));
router.use('/equipment/fishingrods/advancerod', require('./equipment/fishingrods/advancerod'));
router.use('/equipment/fishingrods/ashrod', require('./equipment/fishingrods/ashrod'));
router.use('/equipment/fishingrods/whiteoakrod', require('./equipment/fishingrods/whiteoakrod'));

router.use('/plants', require('./plant/plants'));
router.use('/plants/dahila', require('./plant/dahila'));
router.use('/plant/flax', require('./plant/flax'));
router.use('/plant/daisy', require('./plant/daisy'));

module.exports = router;
