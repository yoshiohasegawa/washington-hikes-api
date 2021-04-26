const express = require('express');
const hikesController = require('../controllers/hikes');

// Router for washingtonhikes/api/hikes
const router = express.Router();

router.use(express.json());

// GET
router.get('/', hikesController.getHikes);
router.get('/:id', hikesController.getHikes);

// POST
router.post('/', hikesController.postHikes);

// DELETE
router.delete('/:id', hikesController.deleteHikes);

// PUT
router.put('/:id', hikesController.putHikes);

module.exports = router;