const mongoose = require('mongoose');

const toMongoObjId = (string) => {
  return mongoose.Types.ObjectId(string);
};

module.exports = { toMongoObjId };
