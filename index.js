const express = require('express');
const loader = require('./loader');

const app = express();

const fishingrodsRouter = require('./equipment/fishingrods/fishingrods');
const simplerodRouter = require('./equipment/fishingrods/simplerod');
const birchrodRouter = require('./equipment/fishingrods/birchrod');
const oakrodRouter = require('./equipment/fishingrods/oakrod');
const advancerodRouter = require('./equipment/fishingrods/advancerod');

app.use('/', loader);
app.use('/equipment/fishingrods', fishingrodsRouter);
app.use('/equipment/fishingrods/simplerod', simplerodRouter);
app.use('/equipment/fishingrods/birchrod', birchrodRouter);
app.use('/equipment/fishingrods/oakrod', oakrodRouter);
app.use('/equipment/fishingrods/advancerod', advancerodRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
