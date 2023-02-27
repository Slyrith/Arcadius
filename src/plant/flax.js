const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Bait: "Flax",
    Tier: 3,
    Image: "https://static.wikia.nocookie.net/arcadius/images/9/98/Flower_flax-2022-05.png",
    Durability: 27,
    Value: 45,
    EXP: 15,
    RespawnTime: "15s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
