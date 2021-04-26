const express = require('express');
const hikesRouter = require("./hikes.js");

const router = express.Router();
router.use('/washingtonhikes/api/hikes', hikesRouter)

module.exports = router;