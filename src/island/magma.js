const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Bait: "Magma Island",
    Image: "https://static.wikia.nocookie.net/arcadius/images/a/a8/Magma_Island.jpg",
    Map: "https://static.wikia.nocookie.net/arcadius/images/7/77/Magma_island_map.jpg",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
