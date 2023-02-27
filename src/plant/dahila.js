const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Bait: "Dahila",
    Tier: 1,
    Image: "https://static.wikia.nocookie.net/arcadius/images/a/a4/Flower_dahila-2022-05.png",
    Durability: 3,
    Value: 5,
    EXP: 1,
    RespawnTime: "5s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
