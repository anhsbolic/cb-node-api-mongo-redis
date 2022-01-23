/**
 * Code : 200
 * Response : Success
 * @param {Object} res express response object
 * @param {String} msg message
 * @param {Any} data any type of data
 * @param {Object} meta additional data object
 */
const responseSuccess = (res, msg = 'Success', data, meta) => {
  res.status(200).send({
    success: true,
    message: msg,
    data: data,
    meta: meta,
  });
};

/**
 * Code : 201
 * Response : Data Created
 * @param {Object} res express response object
 * @param {String} msg message
 * @param {Any} data any type of data
 * @param {Object} meta additional data object
 */
const responseCreated = (res, msg = 'Data Created', data, meta) => {
  res.status(201).send({
    success: true,
    message: msg,
    data: data,
    meta: meta,
  });
};

/**
 * Code : 400
 * Response : Bad Request
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseBadRequest = (res, msg = 'Bad Request') => {
  res.status(400).send({
    success: false,
    message: msg,
  });
};

/**
 * Code : 401
 * Response : Unauthorized
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseUnauthorized = (res, msg = 'Unauthorized') => {
  res.status(401).send({
    success: false,
    message: msg,
  });
};

/**
 * Code : 403
 * Response : Forbiddenr
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseForbidden = (res, msg = 'Forbiddenr') => {
  res.status(403).send({
    success: false,
    message: msg,
  });
};

/**
 * Code : 404
 * Response : Not Found
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseNotFound = (res, msg = 'Not Found') => {
  res.status(404).send({
    success: false,
    message: msg,
  });
};

/**
 * Code : 500
 * Response : Internal Server Error
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseError = (res, msg = 'Internal Server Error') => {
  res.status(500).send({
    success: false,
    message: msg,
  });
};

module.exports = {
  responseSuccess,
  responseCreated,
  responseUnauthorized,
  responseForbidden,
  responseBadRequest,
  responseNotFound,
  responseError,
};
