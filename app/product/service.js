const Joi = require('joi');
const moment = require('moment');
const error = require('../../helper/error');
const utils = require('../../utils');
const productRepository = require('./repository');

/**
 * Get List of Product with Filter & Pagination
 * @param {Object} query values for filtering needs
 */
const index = async (query) => {
  let products = await productRepository.list();

  return products;
};

/**
 * Create New Product
 * @param {Object} data all data required to create a product
 */
const create = async (data) => {
  // data validation
  let validationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    price: Joi.number().required().min(0),
  });

  try {
    await validationSchema.validateAsync(data);
  } catch (err) {
    error.throwBadRequest(err.details[0]?.message);
  }

  // create
  let product = {
    name: data.name,
    description: data.description,
    price: data.price,
  };

  let createdProduct = await productRepository.create(product);
  if (!createdProduct) {
    error.throwInternalServerError('Create Product Fail');
  }

  return createdProduct;
};

/**
 * Get Detail of Product
 * @param {String} id product id
 */
const detail = async (id) => {
  let product = await productRepository.findById(id);
  if (!product) {
    error.throwNotFound();
  }

  return product;
};

/**
 * Update Product Data
 * @param {String} id product id
 * @param {Object} data all data required to create a product
 */
const update = async (id, data) => {
  let product = await productRepository.findById(id);
  if (!product) {
    error.throwNotFound();
  }

  // data validation
  let validationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    price: Joi.number().required().min(0),
  });

  try {
    await validationSchema.validateAsync(data);
  } catch (err) {
    error.throwBadRequest(err.details[0]?.message);
  }

  // update
  let updateData = {
    name: data.name,
    description: data.description,
    price: data.price,
  };

  let updatedProduct = await productRepository.update(product._id, updateData);
  if (!updatedProduct) {
    error.throwInternalServerError('Update Product Fail');
  }

  return updatedProduct;
};

/**
 * Delete Product
 * @param {String} id product id
 */
const deleteOne = async (id) => {
  let product = await productRepository.findById(id);
  if (!product) {
    error.throwNotFound();
  }

  let deletedProduct = await productRepository.deleteOne(product._id);
  if (!deletedProduct) {
    error.throwInternalServerError('Delete Product Fail');
  }

  return true;
};

module.exports = {
  index,
  create,
  detail,
  update,
  deleteOne,
};
