'use strict';
// catController

const { cats, getCat } = require('../models/catModel')

const cat_list_get = (req, res) => {
  res.json(cats);
};
const cat_get = (req, res) => {
  const cat = getCat(req.params.catId);
  res.json({});
}

const cat_post = (req, res) => {
  console.log('add cat data', req.body);
  res.send('From this endpoint you can add user.');
}
module.exports = {
  cat_list_get,
  cat_get,
  cat_post
};