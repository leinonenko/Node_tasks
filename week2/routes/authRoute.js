'use strict';
const express = require('express');
const router = express.Router();
const {login} = require('../controllers/authController');
const {body} = require('express-validator');
const {user_post} = require('../controllers/authController');


router.post('/login', login);


router.post(
    '/register',
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('passwd').matches('(?=.*[A-Z]).{8,}'),
    user_post);

module.exports = router;
