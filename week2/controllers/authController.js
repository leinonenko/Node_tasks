'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {httpError} = require('../utils/errors');
const {validationResult} = require('express-validator');
const {insertUser} = require('../models/userModel');
const bcrypt = require('bcryptjs');


const login = (req, res, next) => {
  // TODO: add passport authenticate
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log('local params', err, user, info);
    if (err || !user) {
      next(httpError('username / password incorrect', 400));
      return;
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        next(httpError('login error', 400));
        return;
      }
      const token = jwt.sign(user, '4215');
      return res.json({ user, token });
    });
  })(req, res, next);
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
  console.log('add user data', req.body);
  try {
    req.body.passwd = bcrypt.hashSync(req.body.passwd, 12);
    const user = req.body;
    const id = await insertUser(user);
    res.json({message:`user added with id ${id}`, user_id:id});
  } catch (e) {
    console.log('user post error', e.message);
    const err = httpError('Error registering user', 400);
    next(err);
    return;
  }
};

module.exports = {
  login,
  user_post,
};