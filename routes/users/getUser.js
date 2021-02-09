const express = require('express');
const router = express.Router();
const getUser = require('../../controllers/GetUser');
let userSchema = require('../../models/user');
router.get('/users', (req, res, next) => {
    let result = getUser.getUser(userSchema);
    result.then(function (message) {
        res.json(message);
    }).catch(function (error) {
        res.json(error);
    });
});


module.exports = router;