const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    reps: {type: Number, required: true },
    weight: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true
});
