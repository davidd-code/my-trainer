const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
    skeleton: { type: Schema.Types.ObjectId, ref: 'Skeleton' },
    exercises: [{
        title: String,
        reps: Number,
        sets: Number,
        weight: Number
    }],
    date: { type: Date, required: true },
});


module.exports = mongoose.model('Workout', workoutSchema);
