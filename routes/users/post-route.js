const express = require('express');
const router = express.Router();
const valid = require('../../lib/valid');
const schema = require('../../config/schema.json');


router.post('/users',(req, res, next)=>{
    valid(req.body,schema.schema)
});

module.exports = router;