const express = require('express');
const router = express.Router();
const { valid } = require('../../lib/valid');
const CreateUser = require('../../controllers/CreateUser');

let userSchema = {
    "type": "object",
    "required": [
        "name",
        "email",
        "password",
        "age"
    ],
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
router.post('/users', (req, res, next) => {
    let data = req.body;
    let isValid = valid(data, userSchema);
    if (isValid) {
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