'use strict';
// catController

const { getAllCats, getCat, insertCat, deleteCat, updateCat} = require('../models/catModel')

const cat_list_get = async (req, res) => {
  const cats = await getAllCats()
  console.log('All cats', cats);

  res.json(cats);
};
const cat_get = async (req, res) => {
  const cat = await getCat(req.params.catId);
  res.json(cat);
}

const cat_post = async (req, res) => {
  console.log('add cat data', req.body);
  console.log('filename', req.file)
  const cat = req.body;
  cat.filename = req.file.filename;
  const id = await insertCat(cat);
  res.send(`Cat added with id: ${id}`);
}

const cat_delete = async (req, res) => {
  const deleted = await deleteCat(req.params.catId);
  res.send(`Cat deleted: ${deleted}`);
};

const cat_update = async (req, res) => {
  const updated = await updateCat(req.body);
  res.send(`Cat updated  ${updated}`)
}

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
  cat_delete,
  cat_update
};