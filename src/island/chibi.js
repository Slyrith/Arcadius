const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Bait: "Chibi Island",
    Image: "https://static.wikia.nocookie.net/arcadius/images/8/81/Chibi_Island.jpg",
    Map: "https://static.wikia.nocookie.net/arcadius/images/4/4b/Chibi_island_map.jpg",
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
