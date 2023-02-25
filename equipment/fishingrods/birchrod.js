const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    Equipment: "Birch Rod",
    Image: "https://static.wikia.nocookie.net/arcadius/images/5/50/Birch_Rod.png",
    Level: "10",
    Recipe: "10 Flax + 40 Birch Log + 2.500g Crafting Fee",
    BaseImpact: "32",
    BaseDurability: "160",
    BaseTimeToCatch: "Unknown",
    Perk: "none"
  };
  const formattedData = JSON.stringify(data, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
