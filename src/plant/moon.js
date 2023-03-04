const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Moon Leaf",
    Tier: 8,
    Image: "https://static.wikia.nocookie.net/arcadius/images/a/a6/Flower_moon_leaf-2022-05.png",
    Durability: 192,
    Value: 320,
    EXP: 155,
    RespawnTime: "40s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
