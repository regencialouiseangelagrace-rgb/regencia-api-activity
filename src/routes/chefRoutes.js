const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chefController');

router.post('/', chefController.createChef);
router.get('/', chefController.getAllChefs);

module.exports = router;
