const express = require('express');
const hikesController = require('../controllers/hikes');

// Router for washingtonhikes/api/hikes
const router = express.Router();

router.use(express.json());
router.get('/', hikesController.getHikes);

module.exports = router;