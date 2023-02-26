const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Equipment: "Oak Rod",
    Image: "https://static.wikia.nocookie.net/arcadius/images/9/95/Oak_Rod.png",
    Level: "20",
    Recipe: "15 Flax + 25 Maple Log + 5.000g Crafting Fee",
    BaseImpact: "72",
    BaseDurability: "360",
    BaseTimeToCatch: "Unknown",
    Perk: "none"
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
