const { BadRequest } = require('../utils/error');
module.exports = {
    ageValidate: (req, res, next) => {
        let data = req.query;
        let age = parseInt(data.age);
        if (isNaN(age)) {
            throw new BadRequest('InValid! Age must be valid number.');
        }
        else if (age <= 0) {
            throw new BadRequest('InValid! Age must be valid number greater than zero.');
        }
        next();
    },
    nameValidate: (req, res, next) => {
        let data = req.query;
        let name = data.name;
        let regex = /^[A-Za-z]+$/;
        if (name.length == 0) {
            throw new BadRequest('Please Enter Your Name.');
        }
        else if (!name.match(regex)) {
            throw new BadRequest('Only Alphabets is required.');
        } 
        else if (name.length < 4) {
            throw new BadRequest('Atleast 4 characters required.');
        }
        next();
    },
    success: (req, res, next) => {
        res.json('Success!');
    }
}