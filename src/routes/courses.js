const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseControllers');

// newsController.index


router.get('/',courseController.show)

module.exports = router;
