const express = require('express');
const router = express.Router();
const valid = require('../../lib/valid');
const CreateUser = require('../../controllers/CreateUser');
const schema = require('../../config/schema.json');


router.post('/users', (req, res, next) => {
    let data = req.body;
    if (valid(data, schema.schema)) {
        let createUser = new CreateUser();
        createUser.create(data)
            .then(function (message) {
                res.json(message);
            }).catch(function (error) {
                res.json(error);
            });
        // createUser.createUser(data)

    }
});

module.exports = router;