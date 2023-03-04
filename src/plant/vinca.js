const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Vinca Petal",
    Tier: 6,
    Image: "https://static.wikia.nocookie.net/arcadius/images/8/87/Flower_vinca_petal-2022-05.png",
    Durability: 108,
    Value: 180,
    EXP: 81,
    RespawnTime: "30s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
