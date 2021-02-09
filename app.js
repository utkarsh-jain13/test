const http = require('http');
const express = require('express');
const config = require('./config/default.json');
const handleErrors = require('./lib/handleErrors');
const database = require('./models/database');
const joinRoutes = require('./joinRoutes');

const app = express();
app.use(express.json());


database(app).then(() => {
    return joinRoutes(app);
}).then(() => {
    app.use(handleErrors);
    const server = http.createServer(app);
    server.listen(config.PORT, () => {
        console.log(`Server running... ${config.PORT}`)
    });
}).catch((error) => {
    console.log(error);
});






