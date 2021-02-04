const http = require('http');
const express = require('express');
const config = require('./config/default.json');
const app = express();
const getRoutes = require('./routes/users/get-route');
const postRoutes = require('./routes/users/post-route');
const handleErrors = require('./lib/handleErrors');
const tv4 = require('tv4');


// app.use(expressValidator());
app.use(express.json());
// app.use(getRoutes);
app.use(postRoutes);
app.use(handleErrors);

const server = http.createServer(app);
server.listen(config.PORT, () => {
    console.log(`Server running... ${config.PORT}`)
});
