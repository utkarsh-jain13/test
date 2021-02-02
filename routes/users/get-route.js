const express = require('express');
const router = express.Router();
const mw = require('../../lib/middleware');

router.get('/users', mw.ageValidate, mw.nameValidate, mw.success);

module.exports = router;