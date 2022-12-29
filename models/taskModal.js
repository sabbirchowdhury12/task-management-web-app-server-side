const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String
    },
    email: {
        type: String
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Tasks', taskSchema);