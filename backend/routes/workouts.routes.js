const router = require('express').Router();
let Workout = require('../models/workout.models');

router.route('/').get((req, res) => {
    Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const skeleton = req.body.skeleton;
    const setInfo = req.body.set;

    const newWorkout = new Workout({
        skeleton,
        setInfo
    });

    newWorkout.save()
    .then(() => res.json('Workout Added!'))
    .catch(err => console.log(err));
});

router.route('/:id').get((req, res) => {
    Workout.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
