const express = require('express');
const router = express.Router();
const getUser = require('../../controllers/getUser');
const schema = require('../../config/schema.json');
router.get('/users', (req, res, next) => {

});


module.exports = router;