const express = require('express');
const loader = require('./loader');

const app = express();

const fishingrodsRouter = require('./equipment/fishingrods/fishingrods');
const baitRouter = require('./bait/bait');
const wormRouter = require('./bait/worm');
const insectRouter = require('./bait/insect');

const rods = ['/simplerod', '/birchrod', '/oakrod', '/advancerod'];

app.use('/', loader);
app.use('/equipment/fishingrods', fishingrodsRouter);
rods.forEach((rod) => app.use(`/equipment/fishingrods${rod}`, require(`./equipment/fishingrods${rod}`)));
app.use('/bait/bait', baitRouter);
app.use('/bait/worm', wormRouter);
app.use('/bait/insect', insectRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
