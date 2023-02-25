const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    Equipment: "Oak Rod",
      Image: "https://static.wikia.nocookie.net/arcadius/images/9/95/Oak_Rod.png",
      Level: "20",
      Recipe: "15 Flax + 25 Maple Log + 5.000g Crafting Fee",
      BaseImpact: "72",
      BaseDurability: "360",
      BaseTimeToCatch: "Unknown",
      Perk: "none"
  });
});

module.exports = router;