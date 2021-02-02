const express = require('express');
const router = express.Router();
const mw = require('../../lib/middleware');

router.post('/users',mw.ageValidate, mw.nameValidate, mw.success);

module.exports = router;