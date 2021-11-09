'use strict';
// userRoute
const express = require('express');
const {user_get, user_list_get, user_post, user_update, user_delete} = require('../controllers/userController');
const router = express.Router();
/*
router.route('/')
.get(user_list_get)
.post( upload.single('user'), user_post)
.put(user_update);

router.route('/:userId')
.get(user_get)
.delete(user_delete);
*/

router.get('/',user_list_get);

router.get('/:userId', user_get);

router.post('/', user_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can modify user.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete user.')
});

module.exports = router;