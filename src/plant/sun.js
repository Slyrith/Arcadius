const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Sun Leaf",
    Tier: 7,
    Image: "https://static.wikia.nocookie.net/arcadius/images/c/c8/Flower_sun_leaf-2022-05.png",
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
