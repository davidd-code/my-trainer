const router = require('express').Router();
const mongoose = require('mongoose');
let User = require('../models/user');

router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{

    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
