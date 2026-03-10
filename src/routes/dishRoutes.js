const express = require('express');
const router = express.Router();
// Import controllers here...
const { protect, authorize } = require('../middleware/authMiddleware');

// ANYONE can get dishes
router.get('/', getDishes);

// ONLY Admins and Managers can create dishes
router.post('/dishes', protect, authorize('admin', 'manager'), createDish);

module.exports = router;