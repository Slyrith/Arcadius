const express = require('express');
const loader = require('./loader');

const app = express();

const fishingrodsRouter = require('./equipment/fishingrods/fishingrods');
const baitRouter = require('./bait/bait');
const islandRouter = require('./island/islands');

const islands = ['/chibi', '/magma'];
const baits = ['/worm', 'insect'];
const rods = ['/simplerod', '/birchrod', '/oakrod', '/advancerod'];

app.use('/', loader);
app.use('/island', islandRouter);
app.use('/bait/bait', baitRouter);
app.use('/equipment/fishingrods', fishingrodsRouter);
islands.forEach((island) => app.use(`/island/${island}`, require(`./island/${island}`)));
baits.forEach((bait) => app.use(`/bait/${bait}`, require(`./bait/${bait}`)));
rods.forEach((rod) => app.use(`/equipment/fishingrods${rod}`, require(`./equipment/fishingrods${rod}`)));

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
