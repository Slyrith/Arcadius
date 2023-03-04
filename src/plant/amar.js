const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Amar Spore",
    Tier: 7,
    Image: "https://static.wikia.nocookie.net/arcadius/images/9/9e/Flower_amar_spore-2022-05.png",
    Durability: 147,
    Value: 245,
    EXP: 115,
    RespawnTime: "35s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
