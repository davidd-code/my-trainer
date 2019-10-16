const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skeletonSchema = new mongoose.Schema({
    title: { type: String },
    exercises: [{
        exerciseId: Number,
        name: String
    }]
});


module.exports = mongoose.model('Skeleton', skeletonSchema);
