'use strict';
// userRoute
const express = require('express');
const {user_get, user_list_get} = require('../controllers/userController');
const router = express.Router();

router.get('/',user_list_get);

router.get('/:userId', user_get);

router.post('/', (req, res) => {
  res.send('From this endpoint you can add user.')
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can modify user.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete user.')
});

module.exports = router;