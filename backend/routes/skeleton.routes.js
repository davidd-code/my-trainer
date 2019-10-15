const router = require('express').Router();
let Skeleton = require('../models/skeleton.models');

router.route('/').get((req, res) =>{
    Skeleton.find()
    .then(skeleton => res.json(skeleton))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) =>{
    const title = req.body.title;
    const exercises = req.body.exercises;

    const newSkeleton = new Skeleton({
        title,
        exercises
    });

    newSkeleton.save()
        .then(() => res.json('Skeleton added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
