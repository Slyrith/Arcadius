const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const responseData = {
        Equipment: "Ash Rod",
        Image: "https://static.wikia.nocookie.net/arcadius/images/a/a5/Fishing_rod_ash_rod-2022-05.png",
        Level: 40,
        Recipe: "25 Flax + 50 Ash Log + 60.000g Crafting Fee",
        BaseImpact: 200,
        BaseDurability: 1000,
        BaseTimeToCatch: "Unknown",
        Perk: "none"
    };
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
});

module.exports = router;
