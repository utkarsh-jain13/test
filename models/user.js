let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedOn: {
        type: Date
    }
});

module.exports = mongoose.model('User', userSchema);

