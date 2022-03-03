const UserModel = require('../models/user');
const { BadRequest } = require('../utils/error');

module.exports = class CreateUser {
    deleteUserById(param) {
        return new Promise((resolve, reject) => {
            let message;
            UserModel.find({ _id: param.id })
                .then((docs) => {
                    if (docs.length) {
                        UserModel.deleteOne({ _id: param.id })
                            .then(() => {
                                message = 'Document id: ' + param.id + ' deleted!';
                                resolve(message);
                            })
                            .catch((err) => {
                                reject(new Error(err));
                            })
                    }
                    else {
                        message = 'Not Found!';
                        reject(new BadRequest(message));
                    }
                })
                .catch((err) => {
                    console.log(new Error(err));
                })
        })
    }
}