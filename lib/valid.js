const { BadRequest } = require('../utils/error');
const _ = require('lodash');
const tv4 = require('tv4');
tv4.addFormat(require("./tv4formats"));

let valid = (data, schema) => {
    
    let result = tv4.validateResult(data, schema);
    // proceed if valid
    if (result.valid) {
        return true;
    }
    else {
        // extract error message
        let message;
        if (_.has(result.error, "dataPath") && result.error.dataPath.length) {
            message = `${result.error.message} at ${result.error.dataPath}`;
        } else {
            message = result.error.message;
        }

        // send validation error with message
        throw new BadRequest(message);
    }
};

let validParam = (data, schema) => {
    let result = tv4.validateResult(data, schema);
    // proceed if valid
    if (result.valid) {
        return true;
    }
    else {
        // extract error message
        let message;
        if (_.has(result.error, "dataPath") && result.error.dataPath.length) {
            message = `${result.error.message} at ${result.error.dataPath}`;
        } else {
            message = result.error.message;
        }

        // send validation error with message
        throw new BadRequest(message);
    }
};

module.exports = {
    valid,
    validParam
};