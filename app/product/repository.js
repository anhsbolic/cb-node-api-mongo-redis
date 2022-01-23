const { Product } = require('./model');

const list = async () => {
  return await Product.find({}).lean();
};

const findById = async (id) => {
  return await Product.findOne({ _id: id }).lean();
};

const create = async (data) => {
  let product = new Product(data);
  return await product.save();
};

const update = async (id, data) => {
  return await Product.updateOne({ _id: id }, data);
};

const deleteOne = async (id) => {
  return await Product.deleteOne({ _id: id });
};

module.exports = { list, findById, create, update, deleteOne };
