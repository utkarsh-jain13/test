const express = require('express');
const router = express.Router();
const DeleteUser = require('../../controllers/DeleteUser');

router.delete('/users/:id', (req, res, next) => {
    let param = req.params;
    let deleteUser = new DeleteUser();
    let result = deleteUser.deleteUserById(param);
    result.then(function (message) {
        res.json(message);
    }).catch(function (error) {
        res.json(error);
    });
});

module.exports = router;