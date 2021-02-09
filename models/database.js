const mongoose = require('mongoose');
const dbConfig = require('../config/default.json').database;

let database = ((app) => {
    return new Promise((resolve, reject) => {
        let dbUrl = '';
        dbUrl = "mongodb://" + dbConfig.development.host + ":" + dbConfig.development.port + "/" + dbConfig.development.dbName;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: true,
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };
        mongoose.connect(dbUrl, options)
            .then(() => {
                console.log('Mongoose default connection to ' + dbUrl);
                resolve();
            })
            .catch((error) => {
                console.log('Mongoose default connection error');
                reject(error);
            })
    })
});

module.exports = database;

// let database = {
//     init: (app) => {
//         let dbUrl = '';
//         dbUrl = "mongodb://" + dbConfig.development.host + ":" + dbConfig.development.port + "/" + dbConfig.development.dbName;
//         const options = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             autoIndex: true,
//             poolSize: 10, // Maintain up to 10 socket connections
//             serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//             socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//             family: 4 // Use IPv4, skip trying IPv6
//         };
//         mongoose.connect(dbUrl, options);

//         mongoose.connection.on('connected', () => {
//             console.log('Mongoose default connection to ' + dbUrl);
//         })

//         mongoose.connection.on('disconnected', () => {
//             console.log('Mongoose default connection disconnected');
//         })

//         mongoose.connection.on('error', (err) => {
//             console.log('Mongoose default connection error', + err);
//         })

//         process.on('SIGINT', function () {
//             mongoose.connection.close();
//         })
//     }
// }

// module.exports = database;
