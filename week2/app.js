'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.')
});

app.get('/cat/:catId', (req, res) => {
  console.log('/cat route', req.params);
  res.send(`´From this endpoint you can get catId: ${req.params.catId}`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
