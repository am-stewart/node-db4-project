const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getByRecipeId(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({ 
        customMessage: 'something went wrong in the recipe router!',
        message: err.message,

    })
})


module.exports = router