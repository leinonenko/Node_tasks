'use strict';
// catController

const {httpError} = require('../utils/errors');
const { getAllCats, getCat, insertCat, deleteCat, updateCat} = require('../models/catModel')

const cat_list_get = async (req, res) => {
  const cats = await getAllCats()
  console.log('All cats', cats);
  if (cats.length > 0) {
    res.json(cats);
    return;
  }
  const err = httpError('Cats not found', 404);
  next(err);
};

const cat_get = async (req, res, next) => {
  const cat = await getCat(req.params.catId, next);
  if (cat) {
    res.json(cat)
    return;
  }
  const err = httpError('Cat not found', 404);
  next(err);
};

const cat_post = async (req, res) => {
  console.log('add cat data', req.body);
  console.log('filename', req.file)
  const cat = req.body;
  cat.filename = req.file.filename;
  cat.message = `Cat added with id: ${await insertCat(cat)}`;
  res.json({message:`Cat created with id: ${id}`});
};

const cat_delete = async (req, res) => {
  const deleted = await deleteCat(req.params.catId);
  res.json({message:`Cat deleted: ${deleted}`});
};

const cat_update = async (req, res) => {
  const updated = await updateCat(req.body);
  res.json({message: `Cat updated:${updated}`});
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
  cat_delete,
  cat_update
};