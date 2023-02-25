const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const responseData = {
    Bait: "Insect Bait",
    Image: "https://static.wikia.nocookie.net/arcadius/images/6/68/Insect_bait.png",
    Cost: "5g",
    Location: "Pond",
    Effect: "-5s Maximum Wait Time for Bite"
  };
  const formattedData = JSON.stringify(responseData, null, 2);
  res.set('Content-Type', 'application/json');
  res.send(formattedData);
});

module.exports = router;
