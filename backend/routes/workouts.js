const router = require('express').Router();
let Workout = require('../models/workout');

router.route('/').get((req, res) => {
    Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const date = Date.parse(req.body.date);
    const exercises = req.body.exercises;

    const newWorkout = new Workout({
        username,
        title,
        date,
        exercises
    });

    newWorkout.save()
    .then(() => res.json('Workout Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
