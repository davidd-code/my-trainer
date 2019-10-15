const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skeletonSchema = new mongoose.Schema({
    title: { type: String },
    exercises: [{
        type: String,
    }]
});


module.exports = mongoose.model('Skeleton', skeletonSchema);
