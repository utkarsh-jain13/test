const express = require('express');
const router = express.Router();
const UpdateUser = require('../../controllers/UpdateUser');
const { valid } = require('../../lib/valid');

let userUpdateSchema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "format": "nameValidate"
        },
        "email": {
            "type": "string",
            "format": "emailValidate"
        },
        "password": {
            "type": "string",
            "format": "passwordValidate"
        },
        "age": {
            "type": "number",
            "format": "positiveNumber"
        }
    }
}

router.put('/users/:id', (req, res, next) => {
    let param = req.params;
    let body = req.body;
    if (valid(body, userUpdateSchema)) {
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