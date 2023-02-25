const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Bait: "Earth Worm",
    Image: "https://static.wikia.nocookie.net/arcadius/images/0/01/Earth_worm_bait.png",
    Cost: "15g",
    Location: "Ocean",
    Effect: "-5s Maximum Wait Time for Bite"
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
