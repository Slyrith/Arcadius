const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Shade Flower",
    Tier: 9,
    Image: "https://static.wikia.nocookie.net/arcadius/images/5/59/Flower_shade_flower-2022-05.png",
    Durability: 243,
    Value: 405,
    EXP: 201,
    RespawnTime: "45s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
