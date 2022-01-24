const express = require('express');
const billingController = require('./controller');

const router = express.Router();

router.get('/', billingController.index);
router.post('/', billingController.create);

router.get('/:id', billingController.detail);
router.put('/:id', billingController.update);
router.delete('/:id', billingController.deleteOne);

module.exports = router;
