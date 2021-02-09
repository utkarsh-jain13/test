const getUserRoute = require('./routes/users/getUser');
const postUserRoute = require('./routes/users/createUser');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        app.use(getUserRoute);
        app.use(postUserRoute);
        resolve();
    })

}