const express = require('express');
const router = express.Router();
const { valid } = require('../../lib/valid');
const UserLogin = require('../../controllers/UserLogin');

let userSchema = {
    "type": "object",
    "required": [
        "email",
        "password"
    ],
    "properties": {
        "email": {
            "type": "string",
            "format": "emailValidate"
        },
        "password": {
            "type": "string",
            "format": "passwordValidate"
        }
    }
}



router.post('/user-login', (req, res, next) => {
    let data = req.body;
    let isValid = valid(data, userSchema);
    if (isValid) {
        // res.json('valid');
        let userLogin = new UserLogin();
        userLogin.logIn(data)
            .then(function (message) {
                res.json(message);
            }).catch(function (error) {
                res.json(error);
            });
        // createUser.createUser(data)
        // Test Content

    }
});

module.exports = router;