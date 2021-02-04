const { BadRequest } = require('../utils/error');
const _ = require('lodash');
const tv4 = require('tv4');


let valid = (data, schema) => {
    tv4.addFormat(require("./tv4formats"));
    let result = tv4.validateResult(data, schema);
    // proceed if valid
    if (result.valid) {
        return;
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

module.exports = valid;