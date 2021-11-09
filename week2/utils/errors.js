'use strict';

const httpError = (message, status) => {
  const err = new Error(message);
  err.status;
};

module.exports = {
  httpError,
};