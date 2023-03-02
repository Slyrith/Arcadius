const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Daisy",
    Tier: 4,
    Image: "https://static.wikia.nocookie.net/arcadius/images/b/bb/Flower_daisy-2022-05.png",
    Durability: 48,
    Value: 80,
    EXP: 31,
    RespawnTime: "20s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
