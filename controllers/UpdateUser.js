const { Error } = require('mongoose');
const { replaceOne } = require('../models/user');
const UserModel = require('../models/user');
const { BadRequest } = require('../utils/error');

module.exports = class CreateUser {
    findExistingEmail(body) {
        return new Promise((resolve, reject) => {
            let message = '';
            UserModel.find({ email: body.email })
                .then((docs) => {
                    if (docs.length) {
                        message = 'Email Already Exist!';
                        reject(new BadRequest(message));
                    }
                    else{
                        resolve();
                    }
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
    update(param, body) {
        return new Promise((resolve, reject) => {
            let message = '';
            UserModel.findOneAndUpdate({ _id: param.id }, body)
                .then((docs) => {
                    message = 'Data Updated!';
                    resolve(message);
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
    findAndUpdateUser(param, body) {
        return new Promise((resolve, reject) => {
            let message = '';
            if (body.hasOwnProperty('email')) {
                this.findExistingEmail(body)
                    .then(() => {
                        this.update(param, body)
                            .then((message) => {
                                resolve(message);
                            })
                            .catch((err) => {
                                reject(new Error(err));
                            })
                    })
                    .catch((err) => {
                        reject(err);
                    })
            }
            else {
                this.update(param, body)
                    .then((message) => {
                        console.log(message);
                        resolve(message);
                    })
                    .catch((err) => {
                        reject(new Error(err));
                    })
            }
        })
    }
};