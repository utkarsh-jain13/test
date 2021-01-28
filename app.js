const http = require('http');
const express = require('express');
const config = require('./config/default.json');
const app = express()




const server = http.createServer(app);
server.listen(config.PORT, () => {
    console.log(`Server running... ${config.PORT}`)
});
