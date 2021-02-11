const express = require('express');
const router = express.Router();
const GetUser = require('../../controllers/GetUser');
const { validParam } = require('../../lib/valid');

let userParamSchema = {
    "type": "object",
    "properties": {
        "order": {
            "type": "string",
            "format": "orderBy"
        },
        "limit": {
            "type": "string",
            "format": "positiveNumber"
        }
    }
}

router.get('/users/:id', (req, res, next) => {
    let data = req.params;
    let getUser = new GetUser();
    let result = getUser.getUserById(data);
    result.then(function (message) {
        res.json(message);
    }).catch(function (error) {
        res.json(error);
    });
});

router.get('/users', (req, res, next) => {
    let data = req.query;
    if (validParam(data, userParamSchema)) {
        let getUser = new GetUser();
        let result;
        if (data.hasOwnProperty('sortBy')
            || data.hasOwnProperty('order')
            || data.hasOwnProperty('limit')) {
            result = getUser.getUserByQuery(data);
        }
        else {
            result = getUser.getUser();
        }
        result.then(function (message) {
            res.json(message);
        }).catch(function (error) {
            res.json(error);
        });
    }
});


module.exports = router;