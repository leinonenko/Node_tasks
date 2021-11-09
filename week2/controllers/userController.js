'use strict';
// userController

const { users, getUser } = require('../models/userModel')

/*
const user_list_get = (req, res) => {
  users.map((user)=>{
    delete user.password;
    return user;
  });
  res.json(users);
};

const user_get = (req, res) => {
  const user = getUser(req.params.userId);
  delete  user.password;
  res.json(user);
}
// TODO post!
const user_post = async (req, res) => {
  console.log('add user data', req.body);
  console.log('filename', req.file)
  const user = req.body;
  user.filename = req.file.filename;
  user.message = `User added with id: ${await insertUser(user)}`;
  res.json({message:`User created with id: ${id}`});
}

const user_delete = async (req, res) => {
  const deleted = await deleteUser(req.params.userId);
  res.json({message:`User deleted: ${deleted}`});
};

const user_update = async (req, res) => {
  const updated = await updateUser(req.body);
  res.json({message: `User updated:${updated}`});
}
*/

const user_list_get = (req, res) => {
  users.map((user)=>{
    delete user.password;
    return user;
  });
  res.json(users);
};

const user_get = (req, res) => {
  const user = getUser(req.params.userId);
  delete  user.password;
  res.json(user);
}

const user_post = (req, res) => {
  console.log('add user data', req.body);
  res.send('From this endpoint you can add user.');
}

module.exports = {
  user_list_get,
  user_get,
  user_post
};