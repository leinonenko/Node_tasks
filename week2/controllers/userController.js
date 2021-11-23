'use strict';
//userController
const {
  getAllUsers,
  getUser,
  insertUser,
  deleteUser,
  updateUser
} = require('../models/userModel');

const {httpError} = require('../utils/errors');
const {validationResult} = require('express-validator');

const user_list_get = async (req, res, next) => {
  const users = await getAllUsers();
  console.log('all users', users);
  if (users.length > 0) {
    res.json(users);
    return;
  }
  const err = httpError('User not found', 404);
  next(err);
};

const user_get = async (req, res, next) => {
  const user = await getUser(req.params.userId);
  if (user) {
    res.json(user);
    return;
  }
  const err = httpError('User not found', 404);
  next(err);
};

const user_post = async (req, res, next) => {
  console.log('add user data', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('User_post validation', errors.array());
    const err = httpError('Data no valid', 400);
    next(err);
    return;
  }
  const user = req.body;
  const id = await insertUser(user);
  res.send(`Cat added with id ${id}`);
  res.json(id);
};

const user_delete = async (req, res) => {
  const deleted = await deleteUser(req.params.userId);
  res.json({message: `User deleted:${deleted}`});
};

const user_update = async (req, res) => {
  console.log('controller update user', req.body);
  const updated = await updateUser(req.body);
  console.log(updated);
  res.json({message: `User updated: ${updated}`});
};
const checkToken = (req, res, next) => {
  if (!req.user) {
    next(new Error('token not valid'));
  } else {
    res.json({ user: req.user });
  }
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
  user_delete,
  user_update,
  checkToken
};