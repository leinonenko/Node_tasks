'use strict';
// catRoute
const express = require('express');
const multer = require('multer');
const upload = multer({dest:'./uploads/'});
const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_delete,
  cat_update,
} = require('../controllers/catController');
const router = express.Router();

router.get('/',cat_list_get);

router.get('/:catId', cat_get);

router.post('/', upload.single('cat'), cat_post);

router.put('/', cat_update);

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.')
});
router.delete('/:catId', cat_delete);


module.exports = router;