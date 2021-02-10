const express = require('express');
const router = express.Router();
const UpdateUser = require('../../controllers/UpdateUser');
const schema = require('../../config/schema.json');
const { valid } = require('../../lib/valid');

router.put('/users/:id', (req, res, next) => {
    let param = req.params;
    let body = req.body;
    if (valid(body, schema.schemaForUserUpdate)) {
        let updateUser = new UpdateUser();
        updateUser.findAndUpdateUser(param, body)
            .then(function (message) {
                res.json(message);
            }).catch(function (error) {
                res.json(error);
            });
    }
});

module.exports = router;