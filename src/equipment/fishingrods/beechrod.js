const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const responseData = {
        Equipment: "Beech Rod",
        Image: "https://static.wikia.nocookie.net/arcadius/images/1/16/Fishing_rod_beech_rod-2022-05.png",
        Level: 25,
        Recipe: "15 Flax + 25 Beech Log + 15.000g Crafting Fee",
        BaseImpact: 98,
        BaseDurability: 490,
        BaseTimeToCatch: "Unknown",
        Perk: "none"
    };
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
});

module.exports = router;
