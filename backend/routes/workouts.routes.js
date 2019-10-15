const router = require('express').Router();
let Workout = require('../models/workout.models');

router.route('/').get((req, res) => {
    Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const skeleton = req.body.skeleton;
    const date = Date.parse(req.body.date);
    const exercises = req.body.exercises;

    const newWorkout = new Workout({
        skeleton,
        exercises,
        date
    });

    newWorkout.save()
    .then(() => res.json('Workout Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
