const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
    username: { type: Schema.Types.ObjectId, ref: 'User' },
    date: {type: Date, required: true},
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
});
