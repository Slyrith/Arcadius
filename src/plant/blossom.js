const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Sun Blossom",
    Tier: 11,
    Image: "https://static.wikia.nocookie.net/arcadius/images/6/63/Flower_sun_blossom-2022-05.png",
    Durability: 363,
    Value: 605,
    EXP: 311,
    RespawnTime: "55s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
