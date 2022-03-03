const { Error } = require('mongoose');
const UserModel = require('../models/user');
const { BadRequest } = require('../utils/error');

module.exports = class CreateUser {
    create(data) {
        return new Promise((resolve, reject) => {
            let message = '';
            UserModel.find({ email: data.email })
                .then((docs) => {
                    if (docs.length) {
                        message = "Email already exists!";
                        reject(new BadRequest(message));
                    }
                    else {
                        let create = new UserModel();
                        create.name = data.name;
                        create.email = data.email;
                        create.password = data.password;
                        create.age = data.age;
                        create.save().then(save => {
                            message = "Data uploaded successfully!"
                            resolve(message);
                        }).catch(err => {
                            message = "Something went wrong!";
                            reject(new Error(message));
                        })
                    }
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
}

// module.exports = {
//     "createUser": (data) => {
//         return new Promise((resolve, reject) => {
//             let message = '';
//             UserModel.find({ email: data.email }, function (err, docs) {
//                 if (docs.length) {
//                     message = "Email already exists!";
//                     reject(message);
//                 } else {
//                     let create = new UserModel();
//                     create.name = data.name;
//                     create.email = data.email;
//                     create.password = data.password;
//                     create.age = data.age;
//                     create.save().then(save => {
//                         message = "Data uploaded successfully!"
//                         resolve(message);
//                     }).catch(err => {
//                         message = "Something went wrong!";
//                         reject(new Error(message));
//                     })
//                 }
//             });
//         })
//     }
// }