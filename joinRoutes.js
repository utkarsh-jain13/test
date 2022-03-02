const getUserRoute = require('./routes/users/getUser');
const postUserRoute = require('./routes/users/createUser');
const updateUserRoute = require('./routes/users/updateUser');
const deleteUserRoute = require('./routes/users/deleteUser');
const userLoginRoute = require('./routes/users/userLogin');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        app.use(getUserRoute);
        app.use(postUserRoute);
        app.use(updateUserRoute);
        app.use(deleteUserRoute);
        app.use(userLoginRoute);
        resolve();
    })

}