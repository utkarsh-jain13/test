const express = require('express');
const router = express.Router();
const valid = require('../../lib/valid');
const createUser = require('../../controllers/createUser');
let userSchema = require('../../models/userSchema');
const schema = require('../../config/schema.json');


router.post('/users', (req, res, next) => {
    let data = req.body;
    if (valid(data, schema.schema)) {
        let result = createUser.createUser(data, userSchema);
        result.then(function (message) {
            res.json(message);
        }).catch(function (error) {
            res.json(error);
        });
    }
});

module.exports = router;