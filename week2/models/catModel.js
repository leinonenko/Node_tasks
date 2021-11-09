'use strict';

const pool = require('../database/db');
const {httpError} = require('../utils/errors');
const promisePool = pool.promise();

const getCat = async (catId) => {
  try {
  // TODO find single cat objecty from cats-array and return it
  const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE  cat_id = ?', [catId]);
  console.log('get by id result?', rows);
  return rows[0];
} catch (e) {
  console.error('model get cat by id', e.message);
  const err = httpError('Sql error', 500);
  next(err);
}
};

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertCat = async (cat) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_cat (name, weight, owner, birthdate, filename) VALUES (?, ?, ?, ?, ?)',
        [cat.name, cat.weight, cat.owner, cat.birthdate, cat.filename]);
    console.log('model insert cat', rows);
    return rows.insertId;
  } catch (e) {
      console.error('model insert cat', e.message);
    }
};

const deleteCat = async (catId) => {
  try {
    const [rows] = await promisePool.execute('DELETE FROM wop_cat WHERE cat_id = ?', [catId]);
    console.log('model delete cat', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    console.error('model delete cat', e.message);
    }
};

const updateCat = async (cat) => {
  try {
    console.log('Model update cat', cat);
    const [rows] = await promisePool.execute(
        'UPDATE wop_cat SET name = ?, weight = ?, owner = ?, birthdate = ? WHERE cat_id = ?',
        [cat.name, cat.weight, cat.owner, cat.birthdate, cat.id]);
    console.log('Model update cat', rows);
    return rows.insertId;
  } catch (e) {
    console.error('Model update cat', e.message);
  }
}

module.exports = {
  getAllCats,
  getCat,
  insertCat,
  deleteCat,
  updateCat,
};
