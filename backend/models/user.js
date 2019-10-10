const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
