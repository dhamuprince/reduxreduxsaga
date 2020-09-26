const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    last: String,
    email:String,
    gender:String,
    published:Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('User', NoteSchema);