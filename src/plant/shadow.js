const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Plant: "Shadow Leaf",
    Tier: 10,
    Image: "https://static.wikia.nocookie.net/arcadius/images/f/f9/Flower_shadow_leaf-2022-05.png",
    Durability: 300,
    Value: 500,
    EXP: 253,
    RespawnTime: "50s",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
