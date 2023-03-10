const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const responseData = {
        Equipment: "Simple Rod",
        Image: "https://static.wikia.nocookie.net/arcadius/images/7/7b/Simple_Rod.png",
        Level: 1,
        Recipe: "5 Flax + 20 Birch Log + 500g Crafting Fee",
        BaseImpact: 8,
        BaseDurability: 40,
        BaseTimeToCatch: "10 - 60 Seconds",
        Perk: "none"
    };
    const formattedData = JSON.stringify(responseData, null, 2);
    res.set('Content-Type', 'application/json');
    res.send(formattedData);
});

module.exports = router;
