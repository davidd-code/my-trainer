const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
    skeleton: { type: Schema.Types.ObjectId, ref: 'Skeleton' },
    setInfo: [{
        exercise: {type: Schema.Types.ObjectId, ref: 'Exercise'},
        title: String,
        reps: Number,
        weight: Number
    }]
}, {
    timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);
