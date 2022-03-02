const UserModel = require('../models/user');
const { BadRequest } = require('../utils/error');

module.exports = class UserLogin {
    logIn(data) {
        return new Promise((resolve, reject) => {
            let message = '';
            UserModel.findOne({ email: data.email })
                .then((docs) => {
                    if (docs) {
                        UserModel.findOne({ email: data.email, password: data.password })
                            .then((docs) => {
                                if (docs) {
                                    message = 'Email found!';
                                    resolve(message);
                                }
                                else {
                                    message = "Email and Password didn't match";
                                    reject(new BadRequest(message));
                                }
                            })
                    }
                    else {
                        message = 'Email not found!';
                        reject(new BadRequest(message));
                    }
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
}