const express = require('express');

const equipment = require('./equipment/equipment');

const fishingrods = require('./equipment/fishingrods/fishingrods');
const simplerod = require('./equipment/fishingrods/simplerod');
const birchrod = require('./equipment/fishingrods/birchrod');
const oakrod = require('./equipment/fishingrods/oakrod');
const advancerod = require('./equipment/fishingrods/advancerod');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        Title: "Arcadius API",
        Description: "Work in progress",
        Status: "Online",
        
        Routes: "/equipment"
    });
});

router.use('/equipment', equipment);
router.use('/fishingrods', fishingrods);
router.use('/simplerod', simplerod);
router.use('/birchrod', birchrod);
router.use('/oakrod', oakrod);
router.use('/advancerod', advancerod);

module.exports = router;
