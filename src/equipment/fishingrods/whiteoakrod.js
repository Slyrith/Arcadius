const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const responseData = {
        Equipment: "White Oak Rod ",
        Image: "https://static.wikia.nocookie.net/arcadius/images/6/6e/Fishing_rod_white_oak-2022-05.png",
        Level: 50,
        Recipe: "25 Flax + 50 White Oak Log + 100.000g Crafting Fee",
        BaseImpact: 242,
        BaseDurability: 1210,
        BaseTimeToCatch: "Unknown",
        Perk: "none"
    };
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
});

module.exports = router;
