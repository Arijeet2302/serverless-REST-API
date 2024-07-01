const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/index');

router.post('/items/create', ItemController.createItem);
router.get('/items', ItemController.findItems);
router.post('/items/update', ItemController.updateItem);
router.delete('items/delete', ItemController.deleteItem);

module.exports = router;