const { overSome } = require('lodash');
const UserModel = require('../models/user');
const { BadRequest } = require('../utils/error');

module.exports = class CreateUser {
    getUserById(data) {
        return new Promise((resolve, reject) => {
            let message = '';
            UserModel.find({ _id: data.id }, { deleted: 0, __v: 0 })
                .then((docs) => {
                    if (docs.length) {
                        resolve(docs);
                    }
                    else {
                        message = 'Not Found!';
                        reject(new BadRequest(message));
                    }
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
    getUserByQuery(data) {
        return new Promise((resolve, reject) => {
            let message = '';
            let sortBy = data.sortBy;
            let order = parseInt(data.order);
            let limit = parseInt(data.limit);
            let query = {};
            query[sortBy] = order;
            console.log(query);
            UserModel.find({}, { deleted: 0, __v: 0 }).sort(query).limit(limit)
                .then((docs) => {
                    if (docs.length) {
                        resolve(docs);
                    }
                    else {
                        message = 'Not Found!';
                        reject(new BadRequest(message));
                    }
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
    getUser() {
        return new Promise((resolve, reject) => {
            let message = '';
            UserModel.find({}, { deleted: 0, __v: 0 })
                .then((docs) => {
                    if (docs.length) {
                        resolve(docs);
                    }
                    else {
                        message = 'Not Found!';
                        reject(new BadRequest(message));
                    }
                })
                .catch((err) => {
                    reject(new Error(err));
                })
        })
    }
}



// module.exports = {
//     "getUser": (schema) => {
//         return new Promise((resolve, reject) => {
//             schema.find({},{ password: 0, deleted: 0, __v: 0 } ).exec(function(err, result){
//                 if(err){
//                     console.log(err);
//                     reject(err);
//                 } 
//                 else{
//                     console.log(result);
//                     resolve(result);
//                 }
//             })
//         })
//     }
// }