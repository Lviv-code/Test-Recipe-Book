const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipes.model');

router.get('/', (req, res, next) => {
    Recipe.find()
        .exec()
        .then(data => {
            // console.log(data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.get('/:recipeId', (req, res, next) => {
    const id = req.params.recipeId;
    Recipe.find({
            _id: id
        })
        .exec()
        .then(data => {
            // console.log(data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res, next) => {
    const recipe = new Recipe({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        dateCreated: new Date(),
        recipeDescreption: req.body.recipeDescreption,
        update: req.body.update,
        titleId: req.body.titleId
    })
    recipe
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                massege: 'Hendling POST requests to /recipe',
                savedRecipe: recipe
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.patch('/:recipeId', (req, res, next) => {
    // update recipe
    const id = req.params.recipeId;
    Recipe.updateOne({
            _id: id
        }, {
            $set: {
                update: true
            }
        })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

    //save new vertion
    const recipe = new Recipe({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        dateCreated: new Date(),
        recipeDescreption: req.body.recipeDescreption,
        update: req.body.update,
        titleId: req.body.titleId
    });
    recipe
        .save()
        .then()
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})


router.delete('/:titleId', (req, res, next) => {
    //delete
    const titleId = req.params.titleId;
    Recipe.deleteMany({
            titleId: titleId
        })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;